const express = require('express');
import * as Users from '../controllers/users';

const isSelf;

const router = express.Router();
router.route('')
  .post(Users.create);
router.route('/:id')
  .get(isSelf, Users.get)
  .put(isSelf, Users.update)
  .delete(isSelf, Users.remove);

return router;