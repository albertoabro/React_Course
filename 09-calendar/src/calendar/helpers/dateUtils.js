
export const parseEventDates = (event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
});

export const parseEventsDates = (events) => events.map(parseEventDates);