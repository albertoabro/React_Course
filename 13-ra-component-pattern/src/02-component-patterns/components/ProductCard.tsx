import { createContext } from "react";
import styles from "../styles/styles.module.css"

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, ProductCardProps } from "../interfaces/productInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
};