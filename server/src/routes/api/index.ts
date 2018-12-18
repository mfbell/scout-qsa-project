import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';

import acitivtiesRouter from './activities';
import riskAssessmentRouter from './risk-assessments';
import usersRouter from './users';

const router: Router = Router()

// parse application/json
router.use(bodyParser.json())
// parse application/x-www-form-urlencoded
//router.use(bodyParser.urlencoded({ extended: false }))
router.use((req: Request, res: Response, next) => {
  res.type('json');
  next();
});

// API routes
router.use('/activities', acitivtiesRouter)
      .use('/risk-assessments', riskAssessmentRouter)
      .use('/users', usersRouter)
      .all('/coffee', (req: Request, res: Response) => res.status(418).send('I\'m a teapot'))

export default router;