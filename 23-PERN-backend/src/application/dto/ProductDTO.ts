import Product from "../../infrastructure/persistence/models/Product";
import { ProductAttributes } from "../../interfaces/Product";

type TypeProductDTO = Required<Pick<ProductAttributes, 'name' | 'price'>>;

export class ProductDTO implements ProductAttributes {
    
    id?: string;
    name: string;
    price: number;
    available?: boolean;

    constructor({ id, name, price, available }: TypeProductDTO & Partial<ProductAttributes>) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.available = available;
    };


  // Convierte un ProductDTO a una instancia de un modelo Sequelize (Product)
   static toSequelizeModel(productDTO: ProductDTO): Product {
    return Product.build({
      id: productDTO.id ?? undefined,
      name: productDTO.name,
      price: productDTO.price,
      available: productDTO.available,
    });
  }

  // Convierte un modelo Sequelize (Product) a un ProductDTO
  static fromSequelizeModel(sequelizeModel: Product): ProductDTO {
    return new ProductDTO({
      id: sequelizeModel.id,
      name: sequelizeModel.name,
      price: sequelizeModel.price,
      available: sequelizeModel.available,
    });
  }

}
