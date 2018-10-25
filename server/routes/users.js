const express = require('express');
const users = require('../controllers/users');


const router = express.Router();
router.route('')
  .post(users.create);
router.route('/:id')
  .get(users.get)
  .put(users.update)
  .delete(users.remove);

module.exports = router