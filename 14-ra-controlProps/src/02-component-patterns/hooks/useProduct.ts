import { useEffect, useRef, useState } from "react";
import { OnChangeProductArgs, Product } from "../interfaces/productInterfaces";

interface UseProductArgs {
    product: Product;
    value?: number;
    onChange?: ( args: OnChangeProductArgs ) => void;
}

export const useProduct = ( { onChange, product, value = 0}: UseProductArgs ) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange);

    const increaseBy = (value: number) => {

        if(isControlled.current) 
            return onChange!({ count: value, product});

        const newValue = Math.max( counter + value, 0)
        setCounter( newValue);

        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return { counter, increaseBy };
}
