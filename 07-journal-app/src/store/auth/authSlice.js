import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage:null,
};

const actionMap = {
    login: (state, {payload} ) => {
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName ;
        state.photoURL = payload.photoURL
        state.errorMessage = null;
    },

    logout: (state, {payload} ) => {
        state.status= 'not-authenticated';
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.photoURL= null;
        state.errorMessage = payload?.error;
    },

    checkingCredentials: ( state ) => {
        state.status = 'checking'
    },

    setError: (state, {payload}) => {
        state.error = payload
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { login, logout, checkingCredentials, setError } = authSlice.actions;