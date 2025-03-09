
import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/ProductController";

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.put('/products:id', updateProduct);
router.patch('/products:id', updateProduct)
router.delete('/products:id', deleteProduct);

export default router;