import { Router } from 'express';
import user from '../../controllers/user';

const router: Router = Router();

router.route('')
  .post(user.create)
  .get(user.search);
router.route('/:publicID')
  .get(user.get)
  .put(user.update)
  .delete(user.remove);

export default router;