import { useState } from "react"
import {ShowIncrement} from "./ShowIncrement"
import { useCallback } from "react";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(() => {
        setCounter((value) => value +1);
    }, []); //It´s a memo Hook for functions

    return (
        <>
            <h1>useCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    )
}