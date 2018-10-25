const express = require('express');
const activities = require('../controllers/activities');

const isAuthed, isAdmin;

const router = express.Router();
router.route('')
  .post(isAuthed, activities.create);
router.route('/:id')
  .get(activities.get)
  .put(isAuthed, activities.update)
  .delete(isAdmin, activities.remove);

module.exports = router