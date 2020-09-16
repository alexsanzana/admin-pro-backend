require('dotenv').config(); // estoy leyendo un documento con las variables de entorno
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();
// Configurar CORS
app.use(cors());
// Lectura y parseo del body
app.use(express.json());
// Base de Datos
dbConnection();
// Directorio Publico... cualquier persona vera el contenido de este directorio publico... se crea el siguiente middleware
app.use(express.static('public'));
// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));

app.listen(process.env.PORT, () => {
    console.log('Servidor Corriendo en puerto ' + process.env.PORT);
})