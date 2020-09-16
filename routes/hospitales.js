/**
  Hospitales
  Ruta: '/api/hospitales'
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getHospitales,
    crearHospital,
    actiualizarHospital,
    borrarHospital
} = require('../controllers/hospitales');

const router = Router();
// validarJWT es un middleware
router.get('/', getHospitales);

router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
        validarCampos
    ],
    crearHospital
);

router.put('/:id', [],
    actiualizarHospital
);

router.delete('/:id', borrarHospital);

module.exports = router;