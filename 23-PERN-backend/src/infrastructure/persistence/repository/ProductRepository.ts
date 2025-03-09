import Product from "../models/Product";
import { ProductRepositoryInterface } from "./ProductRepositoryInterface";


class ProductRepository implements ProductRepositoryInterface {
    async getAllProducts(): Promise<Product[]> {
        return await Product.findAll();
    }
    async getProductById(id: string): Promise<Product | null> {
        return await Product.findByPk(id);
    }
    async createProduct(product: Product): Promise<Product> {
        return await Product.create(product);
    }
    async updateProduct(product: Product): Promise<Product> {
        await Product.update(product,{
            where: {id: product.id}
        });

        return (await Product.findByPk(product.id))!;
    }
    async deleteProduct(id: string): Promise<number> {
        return await Product.destroy({where: {id}});
    }
};

export default ProductRepository;