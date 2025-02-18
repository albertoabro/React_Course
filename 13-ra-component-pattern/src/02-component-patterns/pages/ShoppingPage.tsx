import { ProductButtons } from "../components/ProductButtons";
import { ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";

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
           
                <ProductCard product={ product }>
                    <ProductImage />
                    <ProductTitle title={'Hello World'}/>
                    <ProductButtons />
                </ProductCard>

            </div> 
        </div>
    )
}
