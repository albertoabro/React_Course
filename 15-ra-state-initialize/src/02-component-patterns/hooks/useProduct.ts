import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeProductArgs, Product } from "../interfaces/productInterfaces";

interface UseProductArgs {
    product: Product;
    value?: number;
    initialValues?: InitialValues;
    onChange?: ( args: OnChangeProductArgs ) => void;
}

export const useProduct = ( { onChange, product, value = 0, initialValues}: UseProductArgs ) => {

    const [counter, setCounter] = useState( initialValues?.count ?? value );

    const isMounted = useRef( false );

    const increaseBy = (value: number) => {
        
        let newValue = Math.max( counter + value, 0)
        
        if( initialValues?.maxCount )
            newValue = Math.min( newValue, initialValues.maxCount );

        setCounter( newValue);
        onChange && onChange({ product, count: newValue });
    };

    const reset = () => {
        setCounter( initialValues?.count ?? value)
    }

    useEffect(() => {
        if( !isMounted.current ) return;

        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return { 
        counter,
        isMaxCountReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
        maxCount: initialValues?.maxCount, 
        increaseBy,
        reset,
    };
}
