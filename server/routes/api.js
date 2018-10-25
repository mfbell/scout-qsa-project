const express = require('express');
var bodyParser = require('body-parser');

const authenticationRequired = require('../middleware/auth')

const acitivtiesRouter = require('./activities');
const riskAssessmentRouter = require('./risk-assessments');
const usersRouter = require('./users');

router = express.Router()

// parse application/json
//router.use(bodyParser.json())
// parse application/x-www-form-urlencoded
//router.use(bodyParser.urlencoded({ extended: false }))

// API routes
router.use('/activities', acitivtiesRouter)
      .use('/risk-assessments', riskAssessmentRouter)
      .use('/users', usersRouter)
      .all('/coffee', (req, res) => res.status(418).send('I\'m a teapot'))
      .get('/secure', authenticationRequired, (req, res) => {
        res.json(req.jwt);
      });

module.exports = router;