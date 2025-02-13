import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { addEvent, onLoadEvents, onSetActiveEvent, removeEvent, updateEvent } from "../store/calendar/calendarSlice";
import { parseDateToISOString, parseEventDates, parseEventsDates } from "../calendar/helpers/dateUtils";
import { useLanguage } from "./useLanguage";
import calendarApi from "../api/calendarApi";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { messages } = useLanguage();

    const { events: eventsToMemorized, activeEvent: activeEventToMemorized } = useSelector(state => state.calendar)
    const { user } = useSelector(state => state.auth);

    const events = useMemo(() => parseEventsDates(eventsToMemorized), [eventsToMemorized]);
    const activeEvent = useMemo(() => activeEventToMemorized ? parseEventDates(activeEventToMemorized) : null, [activeEventToMemorized]);

    const setActiveEvent = ( calendarEvent ) => {

        const event = parseDateToISOString( calendarEvent );
        dispatch( onSetActiveEvent( event ) );
    };

    const startSavingEvent = async( calendarEvent ) => {

        const event = parseDateToISOString ( calendarEvent );

        try {
            
            if(event.id){
                
                await calendarApi.put(`/events/${event.id}`, event);
                dispatch( updateEvent( { ...event, user } ) );
            }
            else {

                const { data } = await calendarApi.post('/events/new', event);
                dispatch( addEvent( { ...event, id: data.event.id, user }) );
            }

        } catch (error) {

            const msg = error.response?.data?.msg || messages.talkToAdmin;
            let translateMsg = messages[msg] || messages.talkToAdmin;

            Swal.fire(messages.saveError, translateMsg, 'error');

        }
    };       

    const startDeletingEvent = async() => {
        
        try {
            
            await calendarApi.delete(`/events/${activeEvent.id}`)
            dispatch( removeEvent() );

        } catch (error) {

            const msg = error.response?.data?.msg;
            let translateMsg = messages[msg] || messages.talkToAdmin;

            Swal.fire(messages.deleteError, translateMsg, 'error');  
        }
    };

    const startLoadingEvents = async() => {

        try {
            
            const { data } = await calendarApi.get('/events/');
            console.log(data)
            dispatch( onLoadEvents( data.events ) );

        } catch (error) {
            console.log(error);
        }
    };

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents,
    };

}
