const express = require('express');
import helmet from 'helmet';
import router from './routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
// CSRF/csurf??

app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}`));