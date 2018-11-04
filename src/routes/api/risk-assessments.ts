import { Router } from 'express';
import riskAssessments from '../../controllers/risk-assessments';
import { required } from '../../auth';

const router: Router = Router();

router.route('')
  .post(required, riskAssessments.create);
router.route('/:id')
  .get(riskAssessments.get)
  .put(required, riskAssessments.update)
  .delete(required, riskAssessments.remove);

export default router;