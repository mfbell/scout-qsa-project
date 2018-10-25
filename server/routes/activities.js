const express = require('express');
const activities = require('../controllers/activities');


const router = express.Router();
router.route('')
  .post(activities.create);
router.route('/:id')
  .get(activities.get)
  .put(activities.update)
  .delete(activities.remove);

module.exports = router