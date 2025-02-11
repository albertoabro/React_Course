import { useDispatch, useSelector } from "react-redux";
import { addEvent, onSetActiveEvent, removeEvent, updateEvent } from "../store/calendar/calendarSlice";
import { parseDateToISOString, parseEventDates, parseEventsDates } from "../calendar/helpers/dateUtils";
import { useMemo } from "react";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events: eventsToMemorized, activeEvent: activeEventToMemorized } = useSelector(state => state.calendar)
    const events = useMemo(() => parseEventsDates(eventsToMemorized), [eventsToMemorized]);
    const activeEvent = useMemo(() => activeEventToMemorized ? parseEventDates(activeEventToMemorized) : null, [activeEventToMemorized]);

    const setActiveEvent = ( calendarEvent ) => {

        const event = parseDateToISOString( calendarEvent );
        dispatch( onSetActiveEvent( event ) );
    };

    const startSavingEvent = async( calendarEvent ) => {
        //TODO: call to backend

        const event = parseDateToISOString ( calendarEvent );

        if(event._id)
            dispatch( updateEvent( { ...event } ) );
        else
            dispatch( addEvent( { ...event, _id: new Date().getTime()}) );
        
    };

    const startDeletingEvent = async() => {
        //TODO: call to backend
        await dispatch( removeEvent() );
    };

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
