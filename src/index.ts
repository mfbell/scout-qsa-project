import https from 'https';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';

import router from './routes';

export default class Server {
  app: express.Application;
  port: number | string;

  constructor() {
    this.port = process.env.PORT || 5000;

    this.app = express();
  }

  configure() {
    this.app.use(morgan('combined'))
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(passport.initialize());
    this.app.disable('x-powered-by')
  }

  mountRoutes() {
    this.app.use(router);
  }

  listen() {
    this.app.listen(
      this.port, 
      () => console.log(`Express server listening on port ${this.port}`)
    );
    // https.createServer({}, this.app).listen(443)
  }

  start() {
    this.configure()
    this.mountRoutes()
    this.listen()
  }
}