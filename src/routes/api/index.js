const express = require('express');
var bodyParser = require('body-parser');

const acitivtiesRouter = require('./activities');
const riskAssessmentRouter = require('./risk-assessments');
const usersRouter = require('./users');

router = express.Router()

// parse application/json
router.use(bodyParser.json())
// parse application/x-www-form-urlencoded
//router.use(bodyParser.urlencoded({ extended: false }))
router.use((req, res, next) => {
  res.type('json');
  next();
});

// API routes
router.use('/activities', acitivtiesRouter)
      .use('/risk-assessments', riskAssessmentRouter)
      .use('/users', usersRouter)
      .all('/coffee', (req, res) => res.status(418).send('I\'m a teapot'))

module.exports = router;