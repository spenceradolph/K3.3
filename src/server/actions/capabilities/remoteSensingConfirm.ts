import { Socket } from 'socket.io';
import { COMBAT_PHASE_ID, REMOTE_SENSING_TYPE_ID, SLICE_PLANNING_ID, TYPE_MAIN } from '../../../react-client/src/constants/gameConstants';
import { RemoteSensingAction, RemoteSensingRequestAction } from '../../../react-client/src/interfaces/interfaces';
import { SOCKET_SERVER_REDIRECT, SOCKET_SERVER_SENDING_ACTION } from '../../../react-client/src/constants/otherConstants';
import { REMOTE_SENSING_SELECTED } from '../../../react-client/src/redux/actions/actionTypes';
import { Capability, Game, InvItem, Piece } from '../../classes';
import { GAME_DOES_NOT_EXIST, GAME_INACTIVE_TAG } from '../../pages/errorTypes';
import sendUserFeedback from '../sendUserFeedback';
import { GameSession } from '../../../types/sessionTypes';

/**
 * User request to use remote sensing capability on a position.
 */
const remoteSensingConfirm = async (socket: Socket, action: RemoteSensingRequestAction) => {
    // Grab the Session
    const { gameId, gameTeam, gameControllers }: GameSession = socket.handshake.session.ir3;

    if (action.payload == null || action.payload.selectedPositionId == null) {
        sendUserFeedback(socket, 'Server Error: Malformed Payload (missing selectedPositionId)');
        return;
    }

    const { selectedPositionId, invItem } = action.payload;

    // Grab the Game
    const thisGame = await new Game({ gameId }).init();
    if (!thisGame) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_DOES_NOT_EXIST);
        return;
    }

    const { gameActive, gamePhase, gameSlice } = thisGame;

    if (!gameActive) {
        socket.emit(SOCKET_SERVER_REDIRECT, GAME_INACTIVE_TAG);
        return;
    }

    // gamePhase 2 is only phase for remote sensing
    if (gamePhase !== COMBAT_PHASE_ID) {
        sendUserFeedback(socket, 'Not the right phase...');
        return;
    }

    // gameSlice 0 is only slice for remote sensing
    if (gameSlice !== SLICE_PLANNING_ID) {
        sendUserFeedback(socket, 'Not the right slice (must be planning)...');
        return;
    }

    // Only the main controller (0) can use remote sensing
    if (!gameControllers.includes(TYPE_MAIN)) {
        sendUserFeedback(socket, 'Not the main controller (0)...');
        return;
    }

    const { invItemId } = invItem;

    // Does the invItem exist for it?
    const thisInvItem = await new InvItem(invItemId).init();
    if (!thisInvItem) {
        sendUserFeedback(socket, 'Did not have the invItem to complete this request.');
        return;
    }

    // verify correct type of inv item
    const { invItemTypeId } = thisInvItem;
    if (invItemTypeId !== REMOTE_SENSING_TYPE_ID) {
        sendUserFeedback(socket, 'Inv Item was not a remote sensing type.');
        return;
    }

    // does the position make sense?
    if (selectedPositionId < 0) {
        sendUserFeedback(socket, 'got a negative position for remote sensing.');
        return;
    }

    // insert the 'plan' for remote sensing into the db for later use

    if (!(await Capability.remoteSensingInsert(gameId, gameTeam, selectedPositionId))) {
        sendUserFeedback(socket, 'db failed to insert remote sensing, likely already an entry for that position.');
        return;
    }

    await thisInvItem.delete();

    await Piece.updateVisibilities(gameId);
    const gameboardPieces = await Piece.getVisiblePieces(gameId, gameTeam);
    const confirmedRemoteSense = await Capability.getRemoteSensing(gameId, gameTeam);

    // let the client(team) know that this plan was accepted
    const serverAction: RemoteSensingAction = {
        type: REMOTE_SENSING_SELECTED,
        payload: {
            invItem: thisInvItem,
            confirmedRemoteSense,
            gameboardPieces
        }
    };

    // Send the update to the client(s)
    socket.emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
    socket.to(`game${gameId}team${gameTeam}`).emit(SOCKET_SERVER_SENDING_ACTION, serverAction);
};

export default remoteSensingConfirm;
