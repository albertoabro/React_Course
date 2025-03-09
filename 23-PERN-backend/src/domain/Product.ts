import { ProductAttributes } from "../interfaces/Product";


class Product implements ProductAttributes{

    id: string;
    name: string;
    price: number;
    available: boolean;

    constructor({id, name, price, available}: ProductAttributes) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.available = available;
    }
};


export default Product;