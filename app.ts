import * as express from 'express';
import * as pg from 'pg';

import * as db from './controllers/db';
import * as draws from './controllers/draws';
import { asyncMiddleware } from './utils';

let Client: pg.Client;
let App;

// TODO: allow CORS

// TODO: soft rate limiting here!

(async () => {
    Client = await db.connect();

    App = express();

    App.use((req, res, next) => {
        console.log(req.method, req.url, req.body);
        next();
    });
    App.get('/draws', asyncMiddleware(draws.getDraws));

    const port = 8000;

    App.listen(8000);
    console.log(`listening on port: ${port}`);
})();

export {
    Client,
    App,
};
