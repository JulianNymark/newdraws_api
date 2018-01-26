import * as express from 'express';

const asyncMiddleware = (fn: express.RequestHandler) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

const clamp = (value: number, min: number, max: number): number => {
    return Math.max(Math.min(value, max), min);
};

export {
    asyncMiddleware,
    clamp,
};
