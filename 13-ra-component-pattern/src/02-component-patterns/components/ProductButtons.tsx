import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css"

interface Props {
    className?: string;
    style?: CSSProperties | CSSProperties[];
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter} = useContext( ProductContext )

    return (
        <div 
            className={` ${styles.buttonsContainer} ${className}` }
            style={Array.isArray(style) ? Object.assign({}, ...style) : style }
        >
        <button
            className={ styles.buttonMinus }
            onClick={() => increaseBy(-1)}
        >
            -
        </button>

        <div className={ styles.countLabel}> {counter} </div>

        <button
            className={ styles.buttonAdd }
            onClick={() => increaseBy(+1)}
        >
            +
        </button>
    </div>
    )
};
