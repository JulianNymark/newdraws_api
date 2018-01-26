import * as express from 'express';
import { Client } from '../app';

export const getDraws: express.RequestHandler = async (req, res) => {
    const page = (req.query.page) ? req.query.page : 0;
    const resultsPerPage = (req.query.resultsPerPage) ? req.query.resultsPerPage : 20;

    const queryText = `
    SELECT name, ctime
    FROM newdraws
    ORDER BY ctime DESC
    LIMIT $1
    OFFSET $2
    `;
    const qr = await Client.query(
        queryText,
        [resultsPerPage, resultsPerPage * page],
    );

    res.json({
        draws: qr.rows,
    });
};
