require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// CORS
app.use(cors());

// Middleware para el directorio público

// Otro middleware: lectura y parseo del body
app.use(express.json());

// http://localhost:8080/api/users: Es el path que me permitirá acceder a las rutas
app.use('/api/users', require('./routes/user'));

app.listen(port);