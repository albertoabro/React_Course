import Product from "../../domain/Product";
import ProductRepository from '../../infrastructure/persistence/repository/ProductRepository';
import { ProductDTO } from "../dto/ProductDTO";
import { ProductServiceInterface } from "./ProductServiceInterface";

class ProductService implements ProductServiceInterface{

    private readonly productRepository: ProductRepository;

    constructor(productRepository: ProductRepository){
        this.productRepository = productRepository;
    }

    async getAllProducts(): Promise<ProductDTO[]> {
        const products = await this.productRepository.getAllProducts();
        return products.map(product => ProductDTO.fromSequelizeModel(product));
    };

    async getProductById(id: string): Promise<ProductDTO | null> {
        const product = await this.productRepository.getProductById(id);

        return product ? ProductDTO.fromSequelizeModel(product) : null;
    };

    async createProduct(newProduct: Product): Promise<ProductDTO | null> {
        
        if(this.searchProduct(newProduct.id) !== null) return null; 
        
        try {

            
            const productDTO = new ProductDTO(newProduct);

            await this.productRepository.createProduct(ProductDTO.toSequelizeModel(productDTO));
            return productDTO;

        } catch (error) {return null;}
    };

    async updateProduct(product: Product): Promise<Product | null> {

        if (this.searchProduct(product.id) === null ) return null;

        try{
            const productDTO = new ProductDTO(product);
            await this.productRepository.updateProduct(ProductDTO.toSequelizeModel(productDTO));
            return productDTO;

        } catch (error) {return null;}
    };

    async deleteProduct(id: string): Promise<number> {
        
        const productToDelete = this.searchProduct(id);

        if(productToDelete === null) return 0;

        return await this.productRepository.deleteProduct(id);
    };

    private async searchProduct(id: string): Promise<Product | null> {

        return await this.productRepository.getProductById(id);
    }
};

export default ProductService;