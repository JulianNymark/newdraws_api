import * as express from 'express';
import './controllers/draws';
import * as draws from './controllers/draws';

const app = express();

const router = express.Router();

app.get('/draws', draws.getDraws);

const port = 8000;

app.listen(port);
console.log(`listening on port: ${port}`);