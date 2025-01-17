
export const initialState ={
    items: []
};

const actionMap = {
    ADD_ITEM: (state, payload) => ({
        ...state,
        items: [...state.items, payload]
    }),

    REMOVE_ITEM: (state, payload) => ({
        ...state,
        items: state.items.filter( item => item.id !== payload.id)
    }),

    UPDATE_ITEM: (state, payload) => ({
        ...state,
        items: state.items.map( item => 
            item.id === payload.id ? {...item, ...payload.updates } : item
        )
    }),

    TOGGLE_ITEM: (state, payload) => ({
        ...state,
        items: state.items.map( item => 
            item.id === payload.id 
                ? {...item, [payload.field]: !item[payload.field] } 
                : item
        )
    }) 
};

export const reducer = (state, action) => {
    const handler = actionMap[action.type];
    return handler ? handler(state, action.payload) : state
};