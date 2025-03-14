import { z } from "zod";

export const OrderSchema = z.object({
    name: z.string().min(1, 'Your name is required'),
    total: z.number().min(1, 'Order Error'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
});

export const OrderIdSchema = z.object({
    orderId: z.string()
        .transform(value => parseInt(value))
        .refine(value => value > 0, {message: 'Parse id error'})
});

export const SearchProductSchema = z.object({
    search: z.string()
        .trim()
        .min(1, {message: 'The search query is required'})
});


export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: "Product name does not be empty"}),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value)) 
        .refine((value) => value > 0, { message: 'Price must be greater than 0' })
        .or(z.number().min(1, {message: 'Price is required' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'Category is required' })
        .or(z.number().min(1, {message: 'Category is required' })),
    image: z.string().url({ message: 'Image URL is required'})
});
