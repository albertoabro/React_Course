import { formatCurrency } from "@/src/utils/formatCurrency"
import { Product } from "@prisma/client"
import Image from "next/image"
import { ProductAddButton } from "./ProductAddButton"

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <div className="border bg-white ">
            <Image
                width={400}
                height={400}
                src={`/products/${product.image}.jpg`}
                alt={`Image product: ${product.name}`}
            />

            <div className="p-5 h-72 flex flex-col space-y-4">
                <h3 className="text-2xl font-bold"> {product.name} </h3>
                <p className="font-black text-4xl text-amber-500 h-full mb-5 flex flex-grow items-end justify-center">{formatCurrency(product.price)}</p>
                <ProductAddButton product={product} />
            </div>
        </div>
    )
}
