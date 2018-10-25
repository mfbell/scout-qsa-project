const express = require('express');
import * as riskAssessments from '../controllers/risk-assessments';

const isAuthed, isAdmin;

const router = express.Router();
router.route('')
  .post(isAuthed, riskAssessments.create);
router.route('/:id')
  .get(riskAssessments.get)
  .put(isAuthed, riskAssessments.update)
  .delete(isAdmin, riskAssessments.remove);

return router;