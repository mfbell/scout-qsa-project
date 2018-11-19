import { Router } from 'express';
import * as riskAssessments from '../../controllers/risk-assessments';

const router: Router = Router();

router.route('')
  .post(riskAssessments.create);
router.route('/:id')
  .get(riskAssessments.get)
  .put(riskAssessments.update)
  .delete(riskAssessments.remove);

export default router;