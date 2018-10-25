const express = require('express');
const path = require('path');

const apiRouter = require('./api');;

router = express.Router()

// Serve the static files from the React app
//router.use(express.static(path.join(__dirname, 'client/build')));

// Routes
router.use('/api', apiRouter)

/* Let React app handle other paths
 * router.get('*', (req, res) => {
 * res.sendFile(path.join(__dirname + '../../client/build/index.html'));
 * });
 */

module.exports = router