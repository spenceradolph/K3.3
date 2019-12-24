import { Request, Response } from 'express';
import { Game } from '../classes';
import { ACCESS_TAG } from '../pages/errorTypes';
import { TeacherSession } from '../../types/sessionTypes';

/**
 * Get array of news data for a particular game.
 */
const getNews = async (req: Request, res: Response) => {
    // Verify Session
    if (!req.session.ir3teacher) {
        res.redirect(`/index.html?error=${ACCESS_TAG}`);
        return;
    }

    const { gameId }: TeacherSession = req.session.ir3teacher;

    try {
        const results = await Game.getAllNews(gameId);
        res.send(results);
    } catch (error) {
        console.error(error);
        // Manually send response if fails
        res.status(500).send([
            {
                newsId: 69,
                newsTitle: 'DATABASE FAILED'
            }
        ]);
    }
};

export default getNews;
