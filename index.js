require('dotenv').config(); // estoy leyendo un documento con las variables de entorno
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// Configurar CORS
app.use(cors());

// Base de Datos
dbConnection();

// Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'hola mundo'
    })
});

app.listen(process.env.PORT, () => {
    console.log('Servidor Corriendo en puerto ' + process.env.PORT);
})