// import * as express from 'express';
import * as pg from 'pg';

export const connect = async () => {
    const client = new pg.Client({
        database: 'newdraws',
        host: 'localhost',
        password: process.env.PG_PASSWORD_NEWDRAWSAPI,
        user: 'newdrawsapi',
    });

    await client.connect();
    console.log('connected to db!');
    return client;
};
