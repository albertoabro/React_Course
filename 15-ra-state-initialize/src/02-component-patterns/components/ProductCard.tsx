import { createContext, CSSProperties, JSX, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, OnChangeProductArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css"

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] | ( (args: ProductCardHandlers) => JSX.Element );
    className?: string;
    style?: CSSProperties | CSSProperties[];
    value?: number;
    initialValues?: InitialValues;
    onChange?: ( args: OnChangeProductArgs ) => void;
};

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: Props) => {

    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct( { onChange, product, value, initialValues } );

    return (
        <Provider value={{
            product,
            counter,
            maxCount,
            increaseBy
        }}>
            <div 
                className={ ` ${ styles.productCard } ${ className }`}
                style={ Array.isArray(style) ? Object.assign({}, ...style) : style }
            >
                { typeof children === 'function' 
                    ? children({
                        count: counter,
                        isMaxCountReached: isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product: product,
                        increaseBy: increaseBy,
                        reset: reset
                    }) 
                    : children }
            </div>
        </Provider>
    )
};