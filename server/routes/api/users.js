const express = require('express');
const user = require('../../controllers/user');

const router = express.Router();

router.route('')
  .post(user.create)
  .get(user.search);
router.route('/:publicID')
  .get(user.get)
  .put(user.update)
  .delete(user.remove);

module.exports = router