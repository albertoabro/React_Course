import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css"

interface Props {
    className?: string;
    style?: CSSProperties | CSSProperties[];
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount} = useContext( ProductContext )

    const isMAxReached = useCallback(
        () => !!maxCount && counter === maxCount, 
        [ counter, maxCount ]
    );

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
            className={ `${ styles.buttonAdd } ${ isMAxReached() && styles.disabled }` }
            onClick={() => increaseBy(+1)}
        >
            +
        </button>
    </div>
    )
};
