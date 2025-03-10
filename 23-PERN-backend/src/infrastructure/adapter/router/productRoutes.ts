
import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/ProductController";
import { validateProduct } from "../../middlewares/validators/ProductValidations";

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', validateProduct, createProduct);
router.put('/products:id', updateProduct);
router.patch('/products:id', updateProduct)
router.delete('/products:id', deleteProduct);

export default router;