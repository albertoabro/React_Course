import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

import { products } from "../data/products";
import '../styles/custom-styless.css'

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <ProductCard
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {

                    ( { reset, increaseBy, count, isMaxCountReached } ) => (
                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons"/>

                            <button onClick={ reset }>Reset</button>
                            <button onClick={ () =>  increaseBy(-2) }>-2</button>
                            <button 
                                onClick={ () =>  increaseBy(2) }
                                disabled={ isMaxCountReached }
                            >+2</button>
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
