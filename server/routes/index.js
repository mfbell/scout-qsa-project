const express = require('express');
const path = require('path');

const acitivtiesRouter = require('./activities');
const riskAssessmentRouter = require('./risk-assessments');
const usersRouter = require('./users');
const authRouter = require('./auth');

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

module.exports = router