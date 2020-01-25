import { RowDataPacket } from 'mysql2/promise';
import { distanceMatrix } from '../../../constants';
import { CapabilitiesState, MissileAttackType, PieceType } from '../../../types';
import { pool } from '../../database';

export const insertMissileAttack = async (gameId: number, missilePiece: PieceType, targetPiece: PieceType) => {
    // assume we know everything is setup by missileAttackConfirm (pieces exist, within range...)

    const queryString = 'SELECT * FROM missileAttacks WHERE gameId = ? AND missileId = ?';
    const inserts = [gameId, missilePiece.pieceId];
    const [results] = await pool.query<RowDataPacket[] & MissileAttackType[]>(queryString, inserts);

    // prevent duplicate entries if possible (already have an attack for this missile)
    if (results.length !== 0) {
        return false;
    }

    const insertQuery = 'INSERT INTO missileAttacks (gameId, teamId, missileId, targetId) VALUES (?, ?, ?, ?)';
    const insertInserts = [gameId, missilePiece.pieceTeamId, missilePiece.pieceId, targetPiece.pieceId];
    await pool.query(insertQuery, insertInserts);
    return true;
};

export const getMissileAttack = async (gameId: number, teamId: number) => {
    const queryString = 'SELECT * FROM missileAttacks WHERE gameId = ? AND teamId = ?';
    const inserts = [gameId, teamId];
    const [results] = await pool.query<RowDataPacket[] & MissileAttackType[]>(queryString, inserts);

    const confirmedMissileAttacks: CapabilitiesState['confirmedMissileAttacks'] = [];

    for (let x = 0; x < results.length; x++) {
        const thisMissileAttack = results[x];
        confirmedMissileAttacks.push({
            missileId: thisMissileAttack.missileId,
            targetId: thisMissileAttack.targetId
        });
    }

    return confirmedMissileAttacks;
};

export const useMissileAttack = async (gameId: number) => {
    // go through each attack and return the 'results' of the attack or which positions to highlight?

    // start with big join selection that grabs all piece data (mostly just the target piece typeId / position to calculate hit %)
    const queryString =
        'SELECT a.pieceId as targetId, a.pieceTypeId as targetTypeId, a.piecePositionId as targetPositionId, b.piecePositionId as missilePositionId FROM missileAttacks JOIN pieces a ON targetId = a.pieceId JOIN pieces b ON missileId = b.pieceId WHERE gameId = ?';
    const inserts = [gameId];

    type QueryResultType = {
        targetId: number;
        targetPositionId: number;
        targetTypeId: number;
        missilePositionId: number;
    };

    const [results] = await pool.query<RowDataPacket[] & QueryResultType[]>(queryString, inserts);

    const listOfTargetsToDelete = [];
    const listOfPositionsHit = [];

    for (let x = 0; x < results.length; x++) {
        const { targetId, targetPositionId, missilePositionId } = results[x];
        // TODO: determine hit based on distance / type? (shouldn't work from too far away but probably has at least 2 hex range? (only a few hexes around the missile site 1 hex away...))
        // type is also part of the query, but not used here (yet)
        const distance = distanceMatrix[missilePositionId][targetPositionId];
        let percentHit: number;
        switch (distance) {
            case 1:
                percentHit = 85;
                break;
            case 2:
                percentHit = 65;
                break;
            default:
            // doesn't hit
        }

        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber <= percentHit) {
            listOfTargetsToDelete.push(targetId);
            listOfPositionsHit.push(targetPositionId);
        }
    }

    if (listOfTargetsToDelete.length > 0) {
        const deleteQuery = 'DELETE FROM pieces WHERE pieceId in (?)';
        const deleteInserts = [listOfTargetsToDelete];
        await pool.query(deleteQuery, deleteInserts);
    }

    if (results.length > 0) {
        const deleteAll = 'DELETE FROM missileAttacks WHERE gameId = ?';
        const deleteAllInserts = [gameId];
        await pool.query(deleteAll, deleteAllInserts);
    }

    return listOfPositionsHit;
};
