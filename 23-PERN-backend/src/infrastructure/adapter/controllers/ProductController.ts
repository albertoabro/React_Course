import { Request, Response } from "express";
import ProductService from "../../../application/product/ProductService";
import ProductRepository from "../../persistence/repository/ProductRepository";

const productService = new ProductService(new ProductRepository());

export const getAllProducts = async( res: Response) => {
    const products = await productService.getAllProducts();
    res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
    
    const product = await productService.getProductById(req.params.id);

    if(product)
        res.json(product);
    else
        res.status(404).json({message: 'Product not found'});
};

export const createProduct = async (req: Request, res: Response) => {

    const product = await productService.createProduct(req.body);
    if(product)
        res.status(201).json(product);
    else
        res.status(400).json({message: 'Product not found'});
};

export const updateProduct = async (req: Request, res: Response) => {

    const updatedProduct = await productService.updateProduct(req.body);

    if(!updatedProduct){
        res.status(400).json({message: 'Product not updated'});
        return;
    }

    res.status(200).json(updatedProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
    const {id} = req.params;
    const deletedProducts = await productService.deleteProduct(id);
    if(deletedProducts)
        res.status(200).json({message: `Product ${id} deleted successfully`});
    else
        res.status(404).json({message: `Product ${id} not found`});
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};