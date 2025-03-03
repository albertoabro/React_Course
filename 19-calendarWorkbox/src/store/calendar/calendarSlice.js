import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    events: [],
    isLoadingEvents: true,
    activeEvent: null,
};

const actionMap = {
    addEvent: (state, {payload}) => {
        state.events.push( payload );
        state.activeEvent = null;
    },

    removeEvent: (state) => {
        if(state.activeEvent){
        state.events = state.events.filter( event => event.id !== state.activeEvent.id);
        state.activeEvent = null;
        }
    },

    updateEvent: (state, {payload}) => {
        state.events = state.events.map( event => {
            if( event.id === payload.id )
                return payload;

            return event;
        });
    },

    onSetActiveEvent: (state, {payload}) => {
        state.activeEvent = payload;
    },

    onLoadEvents: (state, { payload = [] }) => {
        state.isLoadingEvents = false;
        payload.forEach( event => {
            const exist = state.events.some( dbEvent => dbEvent.id === event.id );
            if( !exist )
                state.events.push( event )
        });
    },

    onLogoutCalendar: (state) => {
        state.events = [];
        state.isLoadingEvents = false;
        state.activeEvent = null;
    },
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { 
    addEvent,
    removeEvent,
    updateEvent,
    onSetActiveEvent,
    onLoadEvents,
    onLogoutCalendar,
 } = calendarSlice.actions;