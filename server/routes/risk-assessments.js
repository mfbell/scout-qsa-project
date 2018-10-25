const express = require('express');
import * as RiskAssessments from '../controllers/risk-assessments';

const isAuthed, isAdmin;

const router = express.Router();
router.route('')
  .post(isAuthed, RiskAssessments.create);
router.route('/:id')
  .get(RiskAssessments.get)
  .put(isAuthed, RiskAssessments.update)
  .delete(isAdmin, RiskAssessments.remove);

return router;