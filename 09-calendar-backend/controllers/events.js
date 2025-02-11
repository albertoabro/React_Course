const { response } = require('express');
const Event = require('../models/Event');

const createEvent = async(req, res = response) => {

    const event = new Event( req.body );

    try {
        
        event.user = req.uid;

        const eventDB = await event.save();

        res.status(201).json({
            ok: true,
            event: eventDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk with admin'
        });
    }
};

const deleteEvent = async(req, res = response) => {
    const eventId = req.params.id;

    try {
        
        const event = await Event.findById(eventId);

        if( !event )
            res.status(404).json({
                ok: false,
                msg: 'Event not found' 
            });

        if( event.user.toString() !== req.uid)
            return res.status(401).json({
                ok: false,
                msg: 'Access invalid'
            });

        await Event.findByIdAndDelete(eventId);

        res.json({ ok: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk with admin'
        });
    }
};

const updateEvent = async(req, res = response) => {

    const eventId = req.params.id;

    try {
        
        const event = await Event.findById(eventId);

        if( !event )
            res.status(404).json({
                ok: false,
                msg: 'Event not found' 
            });

        if( event.user.toString() !== req.uid)
            return res.status(401).json({
                ok: false,
                msg: 'Access invalid'
            });

        const newEvent = {
            ...req.body,
            user: req.uid
        };

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true});

        res.json({
            ok: true,
            event: updatedEvent
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk with admin'
        });
    }
};

const getEvents = async(req, res = response) => {

    const events = await Event.find()
                              .populate('user', 'name'); //Access to references Schema
    
    res.json({
        ok: true,
        events
    });

};

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getEvents
}