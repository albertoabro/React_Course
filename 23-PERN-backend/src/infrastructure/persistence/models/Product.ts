import { Optional } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ProductAttributes } from "../../../interfaces/Product";

interface ProductCreationAttributes extends Optional <ProductAttributes, "id"> {}

@Table({
    tableName: 'products',
    modelName: 'Product'
})

class Product extends Model<ProductAttributes, ProductCreationAttributes> {

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({ type: DataType.STRING(100) })

    declare name: string;

    @Column(DataType.FLOAT(6, 2))
    declare price:number;

    @Column(DataType.BOOLEAN)
    declare available: boolean;
};

export default Product;