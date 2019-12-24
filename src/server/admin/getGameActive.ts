import { Request, Response } from 'express';
import { Game } from '../classes';
import { TeacherSession } from '../../types/sessionTypes';

/**
 * Get the gameActive status of a game.
 */
const getGameActive = async (req: Request, res: Response) => {
    // Verify Session
    if (!req.session.ir3teacher) {
        res.sendStatus(403);
        return;
    }

    const { gameId }: TeacherSession = req.session.ir3teacher;

    const thisGame = await new Game({ gameId }).init();

    const { gameActive } = thisGame;

    res.send(JSON.stringify(gameActive));
};

export default getGameActive;
