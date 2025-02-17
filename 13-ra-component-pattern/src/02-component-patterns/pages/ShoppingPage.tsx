import { ProductCard } from "../components/ProductCard"

const product = {
    id: "1",
    title: "Coffee Mug",
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

            </div>
            <ProductCard product={ product }/>
        </div>
    )
}
