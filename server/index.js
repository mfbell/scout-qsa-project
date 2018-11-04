const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan')
const passport = require('passport');

const router = require('./routes');


const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('combined'))
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.disable('x-powered-by')

app.use(router);

app.listen(port, () => console.log(`Express server listening on port ${port}`));