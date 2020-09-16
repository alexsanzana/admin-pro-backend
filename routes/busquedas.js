/*
    Busquedas
    rutas: 'api/todo/'
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getTodo, getDocumentosColecion } = require('../controllers/busquedas');

const router = Router();

// validarJWT es un middleware
router.get('/:busqueda', validarJWT, getTodo);
router.get('/colecion/:tabla/:busqueda', validarJWT, getDocumentosColecion);

module.exports = router;