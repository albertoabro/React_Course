import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { Product } from "../interfaces/productInterfaces";

import '../styles/custom-styless.css'

const product1 = {
    id: "1",
    title: "Coffee Mug - Card",
    img: './coffee-mug.png'
};

const product2 = {
    id: "1",
    title: "Coffee Mug - Meme",
    img: './coffee-mug2.png'
};

const products: Product[] = [product1, product2]

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{ 
                display: "flex", 
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
           
                <ProductCard 
                    product={ product2 }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

            </div> 
        </div>
    )
}
