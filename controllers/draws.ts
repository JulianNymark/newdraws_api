import * as express from 'express';

export function drawHandler(req: express.Request, res: express.Response) {
    res.json({
        draws: ['some_draw.png']
    });
}
