require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT;

app.use(cors());

// Otro middleware: lectura y parseo del body
app.use(express.json());

app.use('/api/users', require('./routes/user'));

app.listen(port);