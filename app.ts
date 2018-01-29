import * as dotenv from 'dotenv';
import * as express from 'express';
import * as pg from 'pg';

import * as db from './controllers/db';
import * as draws from './controllers/draws';
import { asyncMiddleware } from './utils';

let Client: pg.Client;
let app;

dotenv.config();

(async () => {
    Client = await db.connect();

    app = express();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    // TODO: soft rate limiting here!

    app.use((req, res, next) => {
        console.log(req.method, req.url, req.body);
        next();
    });
    app.get('/draws', asyncMiddleware(draws.getDraws));

    const port = 8000;

    app.listen(8000);
    console.log(`listening on port: ${port}`);
})();

export {
    Client,
    app,
};
