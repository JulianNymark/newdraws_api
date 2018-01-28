import * as express from 'express';
import { Client } from '../app';
import * as Utils from '../utils';

export const getDraws: express.RequestHandler = async (req, res) => {
    let page = (req.query.page) ? req.query.page : 0;
    let resultsPerPage = (req.query.resultsPerPage) ? req.query.resultsPerPage : 20;
    let filter: string = (req.query.filter) ? req.query.filter : '';

    page = Utils.clamp(page, 0, Infinity);
    resultsPerPage = Utils.clamp(resultsPerPage, 0, 100);
    filter = `%${filter}%`;
    console.log(filter);

    const queryText = `
    SELECT name, ctime
    FROM newdraws
    WHERE name ILIKE $1
    ORDER BY ctime DESC
    LIMIT $2
    OFFSET $3
    `;
    const qr = await Client.query(
        queryText,
        [filter, resultsPerPage, resultsPerPage * page],
    );

    res.json({
        draws: qr.rows,
    });
};
