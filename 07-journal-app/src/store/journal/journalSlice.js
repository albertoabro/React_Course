

import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    notes: [],
    isSaving: false,
    messageSaved: '',
    active: null,
    // note: {
    //     id: '',
    //     title: '',
    //     body: '',
    //     date: '',
    //     imageUrls: [],
    // },
    error:null,
};

const actionMap = {
    addNewNote: (state, {payload}) => {
        state.notes = payload;
        state.isSaving = false;
        state.messageSaved='';
    },

    removeNote: (state, {payload}) => {
        state.notes = state.notes.filter( item => item.id !== payload.id)
    },

    updateNote: (state, {payload}) => {
        state.isSaving = false;
        
        state.notes = state.notes.map( item => {
            if ( item.id === payload.id )
                return payload;

            return item;
        });

        state.messageSaved = `${payload.title}, successfully updated`;
    },

    toggleNote: (state, {payload}) => {
        state.notes = state.notes.map( item => 
            item.id === payload.id
                ? {...item,  [payload.field]: !item [payload.field] } 
                : item
        )
    },

    setActiveNote: (state, {payload}) => {
        state.active = payload;
        state.messageSaved='';
    },
    
    setNote: (state, {payload}) => {
        state.notes = payload;
    },

    setSaving: (state) => {
        state.isSaving = true
    },

    setError: (state, {payload}) => {
        state.error = payload
    },
};

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { 
    addNewNote, 
    removeNote, 
    updateNote, 
    toggleNote, 
    setActiveNote, 
    setNote,
    setSaving,
    setError } = journalSlice.actions;