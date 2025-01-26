

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
        state.notes.push( payload );
        state.isSaving = false;
        state.messageSaved='';
    },

    removeNote: (state, {payload}) => {

        state.notes = state.notes.filter( item => item.id !== payload.id);
        state.active = null;
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

    setPhotosToActiveNote: (state, {payload}) => {
        state.active.imageUrls = [...state.active.imageUrls, ...payload];
        state.isSaving = false;
    },

    setClearNoteLogout: ( state ) => {
        state.isSaving = false;
        state.messageSaved = "";
        state.notes = [];
        state.active = null;
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
    setActiveNote, 
    setNote,
    setSaving,
    setPhotosToActiveNote,
    setClearNoteLogout,
    setError } = journalSlice.actions;