import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';

import router from './routes';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(morgan('combined'))
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.disable('x-powered-by')

// Routes
app.use(router);

// Serve
app.listen(port, () => console.log(`Express server listening on port ${port}`));