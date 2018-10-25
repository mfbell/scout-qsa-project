const express = require('express');
import path from 'path';

import acitivtiesRouter from './activities';
import riskAssessmentRouter from './risk-assessments';
import usersRouter from './users';
import authRouter from './auth';

router = express.Router()

// Serve the static files from the React app
router.use(express.static(path.join(__dirname, 'client/build')));

// Routes
router.route('/api')
  .use('/activities', acitivtiesRouter)
  .use('/risk-assessments', riskAssessmentRouter)
  .use('/users', usersRouter);

// Let React app handle other paths
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

export default router;