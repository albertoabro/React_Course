/*
    Auth routes
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/fieldValidators');
const { validateJWT } = require('../middlewares/jwtValidation');
const { creteUser, login, refreshToken } = require('../controllers/auth');
const router = Router();

router.post('/',
    [//middlewares
        check('email', 'The email is mandatory').isEmail(),
        check('password', 'The password must have 6 characters almost').isLength({ min: 6 }),
        validateFields
    ],
    login
);

router.post(
    '/new',
    [
        check('name', 'The name is mandatory').not().isEmpty(),
        check('email', 'The email is mandatory').isEmail(),
        check('password', 'The password must have 6 characters almost').isLength({ min: 6 }),
        validateFields
    ],
    creteUser
);

router.get('/renew', validateJWT, refreshToken);

module.exports = router;