"use client"

import { useStore } from "@/src/store/store"
import { Product } from "@prisma/client";

type ProductAddButtonProps = {
    product: Product;
};

export const ProductAddButton = ({product}: ProductAddButtonProps) => {

    const addToCart = useStore((state) => state.addToCart);

    const handleClick = () => {
        addToCart(product)
    };

    return (
        <button
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full p-3
        uppercase font-bold cursor-pointer mt-auto"
        onClick={handleClick}
    >
        Add
    </button>
    )
}
