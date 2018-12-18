import { Router } from 'express';
import * as activities from '../../controllers/activities';


const router = Router();
router.route('')
  .post(activities.create);
router.route('/:id')
  .get(activities.get)
  .put(activities.update)
  .delete(activities.remove);

export default router;