import * as express from 'express';
import { Client } from '../app';

export const getDraws: express.RequestHandler = async (req, res) => {
    const page = (req.query.page) ? req.query.page : 0;
    const pageCount = (req.query.pageCount) ? req.query.pageCount : 20;
    const qr = await Client.query(`SELECT * FROM newdraws LIMIT ${pageCount} OFFSET ${page * pageCount}`);

    res.json({
        draws: qr.rows,
    });
};
