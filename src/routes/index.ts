import { Router } from 'express';
import path from 'path';

import apiRouter from './api';

const router: Router = Router()

// Serve the static files from the React app
//router.use(express.static(path.join(__dirname, 'client/build')));

// Routes
router.use('/api', apiRouter)

/* Let React app handle other paths
 * router.get('*', (req, res) => {
 * res.sendFile(path.join(__dirname + '../../client/build/index.html'));
 * });
 */

export default router;