
import { useCounter } from '@/hooks/useCounter'
import { useMemo } from 'react';
import { useState } from 'react';

const heavyStuff =  (iterationNumber) => {
    for( let i=0; i<iterationNumber; i++){
        console.log('Let´s go...');
    }

    return `${iterationNumber} iterations done`;
}

export const MemoHook = () => {

    const {counter, increment} = useCounter();
    const [show, setShow] = useState(true);

    const memoizedValue = useMemo(() => heavyStuff(counter), [counter]); //Same as useEffect

    return (
        <>
            <h1>Counter <small> {memoizedValue} </small> </h1>
            <hr />

            <button onClick={ () => increment()}> +1 </button>
            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
        </>
    )
}
