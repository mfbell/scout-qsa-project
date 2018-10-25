const express = require('express');
const riskAssessments = require('../controllers/risk-assessments');


const router = express.Router();
router.route('')
  .post(riskAssessments.create);
router.route('/:id')
  .get(riskAssessments.get)
  .put(riskAssessments.update)
  .delete(riskAssessments.remove);

module.exports = router