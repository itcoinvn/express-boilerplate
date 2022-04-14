import express from 'express';
import rateLimit, { MemoryStore } from 'express-rate-limit'
import helloWorld from './controllers/hello.controller';
import * as helmet from 'helmet';
import cors from 'cors';

const app = express();
const globalRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	standardHeaders: false,
	store: new MemoryStore(),
})

app.use(helmet.expectCt({
    maxAge: 86400,
    enforce: true
}));
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());

app.use(cors());

app.use('/*', globalRateLimiter);

app.get('/', (req: express.Request, res: express.Response) => {
    const message = helloWorld();
    
    res.send({ pong: message});
});

export default app;