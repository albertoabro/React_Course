import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {

        
            setCounter(() => Math.min(counter + 1, MAX_COUNT));
    }

    useEffect(() => {
        
        if( counter < 10 ) return;

        const timeLine = gsap.timeline();
        
        timeLine.to(counterElement.current, { y: -10, duration: 0.2, ease: 'expo.out' })
                .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

    }, [counter]);

    return (
        <>
        <h1>CounterEffect:</h1>
        <h2 ref={ counterElement }>{ counter }</h2>

        <button onClick={handleClick}>
            +1
        </button>
        </>
    )
}
