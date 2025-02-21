import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { OnChangeProductArgs, Product, ProductContextProps } from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css"

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties | CSSProperties[];
    value?: number;
    onChange?: ( args: OnChangeProductArgs ) => void;
};

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, value, onChange }: Props) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div 
                className={ ` ${ styles.productCard } ${ className }`}
                style={ Array.isArray(style) ? Object.assign({}, ...style) : style }
            >
                { children }
            </div>
        </Provider>
    )
};