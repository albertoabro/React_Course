import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store/calendar/calendarSlice";
import { parseEventDates, parseEventsDates } from "../calendar/helpers/dateUtils";
import { useMemo } from "react";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const {events: eventsToMemorized, activeEvent: activeEventToMemorized } = useSelector(state => state.calendar)
    const events = useMemo(() => parseEventsDates(eventsToMemorized), [eventsToMemorized]);
    const activeEvent = useMemo(() => activeEventToMemorized ? parseEventDates(activeEventToMemorized) : null, [activeEventToMemorized]);

    const setActiveEvent = ( calendarEvent ) => {
        const event = {
            ...calendarEvent,
            start: calendarEvent.start instanceof Date ? calendarEvent.start.toISOString() : calendarEvent.start,
            end: calendarEvent.end instanceof Date ? calendarEvent.end.toISOString() : calendarEvent.end
        };
        dispatch( onSetActiveEvent( event ) );
    }

    return {
        events,
        activeEvent,
        setActiveEvent,
    }
}
