
import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    items: [],
    isDateModalOpen: false,
    error:null,
};

const actionMap = {
   
    setDateModalOpen: ( state, { payload } ) => {
        state.isDateModalOpen = payload
    },
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { setDateModalOpen } = uiSlice.actions;
