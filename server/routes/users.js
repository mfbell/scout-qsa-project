const express = require('express');
const users = require('../controllers/users');

const isSelf;

const router = express.Router();
router.route('')
  .post(users.create);
router.route('/:id')
  .get(isSelf, users.get)
  .put(isSelf, users.update)
  .delete(isSelf, users.remove);

module.exports = router