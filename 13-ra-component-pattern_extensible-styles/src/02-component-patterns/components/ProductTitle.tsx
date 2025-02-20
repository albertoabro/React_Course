import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css"

interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties | CSSProperties[]
}

export const ProductTitle = ( { title, className, style} : Props ) => {

    const { product } = useContext( ProductContext );
   
    return (
        <span 
            className={ ` ${styles.productDescription} ${className} ` }
            style={Array.isArray(style) ? Object.assign({}, ...style) : style }
        >
            { title ?? product.title }
        </span>
    )
};