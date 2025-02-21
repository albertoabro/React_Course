import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import '../styles/custom-styless.css'

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ 
                display: "flex", 
                flexDirection: "row",
                flexWrap: "wrap",
            }}>

                {
                    products.map( product => (

                    <ProductCard
                        key={ product.id }
                        product={ product }
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image"/>
                        <ProductTitle className="text-bold"/>
                        <ProductButtons className="custom-buttons"/>
                    </ProductCard>
                    ))
                }
                            
            </div>

            <div className="shopping-cart">

            {
                    shoppingCart && Object.entries(shoppingCart).map(([key, product]) => (

                    <ProductCard
                        key={ key }
                        product={ product }
                        className="bg-dark text-white"
                        style={{ 
                            width: '100px',
                            padding: '0px'
                        }}
                        onChange={ (e) => onProductCountChange(e) }
                        value={ product.count }
                    >
                        <ProductImage className="custom-image"/>
                        <ProductButtons className="custom-buttons"
                            style={{ paddingTop: '0px' }}
                        />
                    </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
