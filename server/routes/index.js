const express = require('express');
import path from 'path';
import resourceRouter from './resources';

router = express.Router()

// Serve the static files from the React app
router.use(express.static(path.join(__dirname, 'client/build')));

// Routes
router.use('/api', resourceRouter);

// Let React app handle other paths
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

export default router;