require('dotenv').config()

const express = require("express")
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const fs = require('fs');

// create our express app
const app = express()
// Habilita cors
const corsOptions = {
  origin: `${process.env.CLIENT_HOST}`, // Especifica el origen exacto
  credentials: true, // Habilita las credenciales en la respuesta (Access-Control-Allow-Credentials)
};

app.use(cors(corsOptions));

// middleware
// habilitar lecturas de datos de formulario
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));

// route
const routes = require('./routes/router.js')
app.use('/', routes)

const port = process.env.SERVER_PORT
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en http://${process.env.SERVER_HOST}:${port}`);
});
