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

        const productSearched = await this.searchProduct(newProduct.id);
        
        if(productSearched !== null) return null; 
    
        try {

            const productDTO = new ProductDTO(newProduct);
            const prod = ProductDTO.toSequelizeModel(productDTO);
            console.log('JSON: ', prod.toJSON())
            await this.productRepository.createProduct(prod);
            return productDTO;

        } catch (error) {
            console.log('ERROR: ', error);
            return null;}
    };

    //TODO: Hacer la promesa a ProductDTO
    async updateProduct(product: Product): Promise<Product | null> {

        const productSearched = await this.searchProduct(product.id);
        if (productSearched=== null ) return null;

        try{
            if(!product.id) throw new Error('Product id is required for update')

            const productDTO = new ProductDTO(product);
            const prod = ProductDTO.toSequelizeModel(productDTO);
            await this.productRepository.updateProduct(prod);
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