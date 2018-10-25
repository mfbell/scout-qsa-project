const express = require('express');
import * as users from '../controllers/users';

const isSelf;

const router = express.Router();
router.route('')
  .post(users.create);
router.route('/:id')
  .get(isSelf, users.get)
  .put(isSelf, users.update)
  .delete(isSelf, users.remove);

return router;