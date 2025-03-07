
import { useCounter } from '@/hooks/useCounter'
import { Small } from './small'
import { useState } from 'react';

export const Memorize = () => {

    const {counter, increment} = useCounter();
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter <Small value={counter}/> </h1>
            <hr />

            <button onClick={ () => increment()}> +1 </button>
            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
        </>
    )
}
