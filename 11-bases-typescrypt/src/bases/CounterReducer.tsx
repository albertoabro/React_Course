import { useReducer } from "react";
import { initialState, reducer } from "../store/counterSlice";
import { doReset, doIncreaseBy } from "../store/actions/counterActions";

export const CounterReducerComponent = () => {

    const [counterState, dispatchCounter] = useReducer(reducer, initialState);

    const handleClick = (value:number) => {
        dispatchCounter( doIncreaseBy( value ));
    };

    const handleReset = () =>{
        dispatchCounter( doReset() );
    };


    return (
        <>
        <h1>Counter Reducer: { JSON.stringify( counterState, null, 2) }</h1>

        <button onClick={() => handleClick(1)}>
            +1
        </button>

        <button onClick={() => handleClick(5)}>
            +5
        </button>

        <button onClick={() => handleClick(10)}>
            +10
        </button>

        <button onClick={handleReset}>
            Reset
        </button>        
        </>
    )
}
