import * as express from 'express';
import * as pg from 'pg';

import * as db from './controllers/db';
import * as draws from './controllers/draws';
import { asyncMiddleware } from './utils';

let Client: pg.Client;
let App;

(async () => {
    Client = await db.connect();

    App = express();

    App.get('/draws', asyncMiddleware(draws.getDraws));

    const port = 8000;

    App.listen(port);
    console.log(`listening on port: ${port}`);
})();

export {
    Client,
    App,
};
