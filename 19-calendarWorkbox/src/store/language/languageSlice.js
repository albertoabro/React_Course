import { createSlice } from '@reduxjs/toolkit' 

const storedLanguage = localStorage.getItem("language") || "es";

const initialState = {
    language: storedLanguage,
};

const actionMap = {
    setLanguage: (state, {payload}) => {
        state.language = payload;
        localStorage.setItem("language", payload);
    }
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { setLanguage } = languageSlice.actions;