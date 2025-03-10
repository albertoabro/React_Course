import { check, validationResult} from "express-validator";
import { Request, Response, NextFunction } from "express";
const asyncHandler = require('express-async-handler')

export const validateProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all([
        check('name').notEmpty().withMessage('Name is required').run(req),
        check('price')
            .notEmpty().withMessage('Price is required')
            .isNumeric().withMessage('Value not valid')
            .custom( value => value > 0).withMessage('Value must be greater than 0')
            .run(req)
    ]);

    let errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
        return;
}
    next();
});