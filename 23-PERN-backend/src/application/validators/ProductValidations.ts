import { check } from "express-validator";
import { Request } from "express";

export const validateProduct  = async (req: Request) => {
    await check('name').notEmpty().withMessage('Name is required').run(req)
}