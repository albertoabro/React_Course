import { createSlice } from '@reduxjs/toolkit' 
import { addHours } from 'date-fns';

const tempEvent =   {

    _id: new Date().getTime(),
    title: 'Birthday',
    note: 'Buy the cake',
    start: new Date().toISOString(),
    end: addHours( new Date(), 2 ).toISOString(),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Alberto',
    }
};

const initialState = {
    events: [
        tempEvent,
    ],
    isLoading: false,
    activeEvent: null,
    error:null,
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

    toggleEvent: (state, {payload}) => {
        state.events = state.events.map( event => 
            event.id === {payload}.id
                ? {...event,  [payload.field]: !event [payload.field] } 
                : event
        )
    },

    onSetActiveEvent: (state, {payload}) => {
        state.activeEvent = payload;
    },

    setLoading: (state, {payload}) => {
        state.isLoading = payload
    },

    setError: (state, {payload}) => {
        state.error = payload
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

export const { addEvent, removeEvent, updateEvent, toggleEvent, onSetActiveEvent, setLoading, setError } = calendarSlice.actions;