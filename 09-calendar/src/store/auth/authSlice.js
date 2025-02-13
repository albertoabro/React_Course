import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    status: 'not-authenticated',
    user: {},
    errorMessage: undefined,
};

const actionMap = {
    onChecking: (state) => {
        state.status = 'checking';
        state.user = {};
        state.errorMessage = undefined;
    },

    onLogin: (state, {payload}) => {
        state.status = 'authenticated';
        state.user = payload;
        state.errorMessage = undefined;
    },

    onLogout: (state, {payload}) => {
        state.status = 'not-authenticated';
        state.user = {};
        state.errorMessage = payload;
    },

    clearErrorMessage: (state) => {
        state.errorMessage = undefined;
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;