import Product from "../../domain/Product";
import { ProductDTO } from "../dto/ProductDTO";

export interface ProductServiceInterface {

    getAllProducts(): Promise<ProductDTO[]>
    getProductById(id: string): Promise<ProductDTO | null>
    createProduct(product: Product): Promise<ProductDTO | null>
    updateProduct(product: Product): Promise<ProductDTO | null>
    deleteProduct(id: string): Promise<number>
};