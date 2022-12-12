import { fib } from "../lib/fib";

import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/status', (req: Request, res: Response) => {
    res.status(200).send('Healthy');
});

app.get('/fib/:sequence', (req: Request, res: Response) => {
    try {
        console.log(`Received request to calculate fib sequence # ${req.params.sequence}`);

        let result = fib(+req.params.sequence);
        res.send({
            sequence: +req.params.sequence,
            result: result
        });
    }
    catch (err: any) {
        res.send({
            error: 'Something bad happened',
            summary: err.message
        });
    }
});

app.listen(port, () => {
    console.info(`Listening on ${port}.`);
});