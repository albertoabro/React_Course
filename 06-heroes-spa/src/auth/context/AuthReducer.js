import { types } from "../types/types";

export const initialState = {
    logged: false
};

const actionMap = {
    [types.login]: (state, payload) => ({ //use [] for dynamic key
        ...state,
        user: payload,
        logged: true
    }),
    [types.logout]: (state, payload) => ({
        logged: false
    }),
};

export const authReducer = (state, action) =>{
    const handler = actionMap[action.type];
    return handler ? handler(state, action.payload): state;
};