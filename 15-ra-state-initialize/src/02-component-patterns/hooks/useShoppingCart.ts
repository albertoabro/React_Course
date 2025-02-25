import { useState } from "react";
import { Product, ProductCartProps } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductCartProps }>({});
    
    const onProductCountChange = ({count = 0, product}: {count: number, product:Product}) => {
        
        setShoppingCart(oldShoppingCart => {

            const productInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if(Math.max(productInCart.count + count, 0) > 0){
                
                productInCart.count += count;
                
                return {
                    ...oldShoppingCart,
                    
                    [ product.id ]: productInCart
                };
            }
            
            const { [product.id ]: toDelete, ...rest } = oldShoppingCart;
            return {...rest};
        })
    } 

    return {
        shoppingCart,
        onProductCountChange
    }
}
