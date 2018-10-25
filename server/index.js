const express = require('express');
const helmet = require('helmet');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
// CSRF/csurf??

app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}`));