import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css"

import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/productInterfaces";

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties | CSSProperties[];
};

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

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