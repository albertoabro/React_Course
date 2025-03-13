import { useStore } from "@/src/store/store";
import { OrderItem } from "@/src/types/types"
import { formatCurrency } from "@/src/utils/formatCurrency";
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

type ProductDetailsProps = {
    product: OrderItem;
}

export const ProductDetails = ({product}: ProductDetailsProps) => {

    const increaseQuantity = useStore(state => state.increaseQuantity);
    const decreaseQuantity = useStore(state => state.decreaseQuantity);
    const removeFromCart = useStore(state => state.removeFromCart);

    const handleIncrease = () => {
        increaseQuantity(product.id);
    };

    const handleDecrease = () => {
        decreaseQuantity(product.id);
    };

    const handleRemove = () => {
        removeFromCart(product.id);
    };
    
    return (
        <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">{product.name} </p>

                    <button
                    type="button"
                    onClick={handleRemove}
                    >
                    <XCircleIcon className="text-red-600 h-8 w-8"/>
                    </button>
                </div>

                <p className="text-2xl text-amber-500 font-black">
                    {formatCurrency(product.price)}
                </p>

                <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                    <button
                    type="button"
                    onClick={handleDecrease}
                    >
                        <MinusIcon className="h-6 w-6"/>
                    </button>

                    <p className="text-lg font-black ">
                    {product.quantity}
                    </p>

                    <button
                    type="button"
                    onClick={handleIncrease}
                    >
                        <PlusIcon className="h-6 w-6"/>
                    </button>
                </div>

                <p className="text-xl font-black text-gray-700">
                    Subtotal: {''}
                    <span className="font-normal"> 
                        {formatCurrency(product.subtotal)}
                    </span>
                </p>
            </div>
        </div>
    )
}
