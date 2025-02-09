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
    addItem: (state, {payload}) => {
        state.events = payload.events
    },

    removeItem: (state, {payload}) => {
        state.events = state.events.filter( item => item.id !== {payload}.id)
    },

    updateItem: (state, {payload}) => {
        state.events = state.events.map( item => 
            item.id === payload.id ? {...item, ...payload.updates } : item
        );
    },

    toggleItem: (state, {payload}) => {
        state.events = state.events.map( item => 
            item.id === {payload}.id
                ? {...item,  [payload.field]: !item [payload.field] } 
                : item
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

export const { addItem, removeItem, updateItem, toggleItem, onSetActiveEvent, setLoading, setError } = calendarSlice.actions;