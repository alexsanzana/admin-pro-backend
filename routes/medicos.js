/*
    Medicos
    rutas: '/api/medico'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getMedicos,
    crearMedico,
    actiualizarMedico,
    borrarMedico
} = require('../controllers/medicos');

const router = Router();
// validarJWT es un middleware
router.get('/', getMedicos);

router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del médico es necesario').not().isEmpty(),
        check('hospital', 'El hospital id debe ser valido').isMongoId(),
        validarCampos
    ],
    crearMedico
);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre del médico es necesario').not().isEmpty(),
        check('hospital', 'El hospital id debe ser valido').isMongoId(),
        validarCampos

    ],
    actiualizarMedico
);

router.delete('/:id',
    validarJWT,
    borrarMedico
);

module.exports = router;