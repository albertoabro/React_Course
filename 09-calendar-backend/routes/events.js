/*
    Events routes
    host + /api/event
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/fieldValidators');
const { validateJWT } = require('../middlewares/jwtValidation');
const { createEvent, updateEvent, deleteEvent, getEvents, getEventById } = require('../controllers/events');
const router = Router();

router.use( validateJWT ); //Middleware for all routers

router.post(
    '/new',
    [
        check('title', 'The title is mandatory').not().isEmpty(),
        check('start', 'Start date is mandatory').not().isEmpty(),
        check('end', 'End date is mandatory').not().isEmpty()
    ],
    createEvent
);

router.put(
    '/:id',
    [
        check('id', 'This event does not exist').not().isEmpty(),
        check('title', 'The title is mandatory').not().isEmpty(),
        check('start', 'Start date is mandatory').not().isEmpty(),
        check('end', 'End date is mandatory').not().isEmpty(),
    ],
    updateEvent
);

router.delete(
    '/:id',
    check('id', 'This event does not exist').not().isEmpty(),
    deleteEvent
);

router.get('/', validateJWT, getEvents);

module.exports = router;