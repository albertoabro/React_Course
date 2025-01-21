import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    pokemons: [],
    page: 0,
    isLoading: false,
    error:null,
};

const actionMap = {
    addItem: (state, {payload}) => {
        state.isLoading = false;
        state.page = payload.page;
        state.pokemons = payload.pokemons;
    },

    removeItem: (state, {payload}) => {
        state.pokemons = state.pokemons.filter( item => item.id !== payload.id)
    },

    updateItem: (state, {payload}) => {
        state.pokemons = state.pokemons.map( item => 
            item.id === payload.id ? {...item, ...payload.updates } : item
        );
    },

    toggleItem: (state, {payload}) => {
        state.pokemons = state.pokemons.map( item => 
            item.id === {payload}.id
                ? {...item,  [payload.field]: !item [payload.field] } 
                : item
        )
    },

    setLoading: (state, {payload}) => {
        state.isLoading = payload
    },

    setError: (state, {payload}) => {
        state.error = payload
    },
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: Object.keys(actionMap).reduce((acc, type) => {
       acc[type] = actionMap[type]; // Convert actionMap to reducers for Redux Toolkit
       return acc;
    }, {}),
});

export const { addItem, removeItem, updateItem, toggleItem, setLoading, setError } = pokemonSlice.actions;