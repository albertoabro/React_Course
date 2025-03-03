
export const parseEventDates = (event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
});

export const parseEventsDates = (events) => events.map(parseEventDates);

export const parseDateToISOString = ( event ) => ({
    ...event,
    start: event.start instanceof Date ? event.start.toISOString() : event.start,
    end: event.end instanceof Date ? event.end.toISOString() : event.end
});