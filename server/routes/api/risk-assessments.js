const express = require('express');
const riskAssessments = require('../../controllers/risk-assessments');
const auth = require('../../auth')

const router = express.Router();

router.route('')
  .post(auth.required, riskAssessments.create);
router.route('/:id')
  .get(riskAssessments.get)
  .put(auth.required, riskAssessments.update)
  .delete(auth.required, riskAssessments.remove);

module.exports = router