const express = require('express');
const app = express();
const port = 8080;
const router = express.Router();
app.use('/', require('./routes'));
app.listen(port);