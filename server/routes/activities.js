const express = require('express');
import * as Activities from '../controllers/activities';

const isAuthed, isAdmin;

const router = express.Router();
router.route('')
  .post(isAuthed, Activities.create);
router.route('/:id')
  .get(Activities.get)
  .put(isAuthed, Activities.update)
  .delete(isAdmin, Activities.remove);

return router;