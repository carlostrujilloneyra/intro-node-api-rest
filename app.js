require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// CORS
app.use(cors());

// Middleware para el directorio público, puedes tener un archivo html en tu carpeta public, al poner solo: http://localhost:8080, te mostrará ese archivo
app.use(express.static('public'))

// Otro middleware: lectura y parseo del body
app.use(express.json());

// http://localhost:8080/api/users: Es el path que me permitirá acceder a las rutas
app.use('/api/users', require('./routes/user'));

app.listen(port);