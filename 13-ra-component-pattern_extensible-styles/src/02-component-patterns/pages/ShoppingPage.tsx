import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

import '../styles/custom-styless.css'

const product = {
    id: "1",
    title: "Coffee Mug - Card",
    img: './coffee-mug.png'
};

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
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard 
                    product={ product }
                    style={{
                        backgroundColor: '#70D1F8',
                        color: "white"
                    }}
                >
                    <ProductImage style={{
                        borderRadius: "20px",
                        padding: "10px",
                        width: "calc(100% - 20px)",
                    }}/>
                    <ProductTitle style={{
                        fontWeight: "bold"
                    }}/>
                    <ProductButtons 
                    style={{
                        display: "flex",
                        justifyContent: 'end'
                    }}/>
                </ProductCard>

            </div> 
        </div>
    )
}
