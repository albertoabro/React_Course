
import type { State } from "./interfaces/counterInterfaces";
import type { Action } from "./actions/counterActions";

export const initialState: State = {
    counter: 0,
    previous: 0,
    changes: 0
};

const actionMap: Record<Action['type'], (state: State, action: any) => State> = {
    increaseBy: (state, {payload}) => ({
        ...state,
        previous: state.counter,
        counter: state.counter + payload,
        changes: state.changes + 1
    }),

    reset: (state) => ({
        ...state,
        counter: 0,
        previous: 0,
        changes: 0
    }),
};

export const reducer = (state: State, action: Action): State => {
    const handler = actionMap[action.type]
    return handler ? handler(state, action) : state
};