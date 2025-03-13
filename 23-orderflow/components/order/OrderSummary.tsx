"use client"

import { useStore } from "@/src/store/store"
import { ProductDetails } from "./ProductDetails";
import { useMemo } from "react";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema/validationSchema";
import { toast } from "react-toastify";
import { showErrors } from "@/src/utils/showValidationErrors";

export const OrderSummary = () => {

    const order = useStore((state) => state.order);
    const clearOrder = useStore( state => state.clearOrder);
    const total = useMemo(() => 
        order.reduce((total, item) => total + item.subtotal, 0)    
    , [order]);

    const handleCreateOrder = async (formData: FormData) => {

        const data = {
            name: formData.get('name'),
            total: parseFloat(total.toFixed(2)),
            order
        };

        const result = OrderSchema.safeParse(data);

        if(!result.success){
            showErrors(result.error.issues);   
            return;
        }

        const response = await createOrder(data);

        if(response?.errors)
            showErrors(response.errors);

        toast.success('Order created successfully');
        clearOrder();
    };

    return (
        <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
            <h1 className="text-4xl text-center font-black">My Order</h1>
            {
                order.length === 0 ? <p className="text-center my-10"> Your order is empty</p> 
                : (
                    <div className="mt-5">
                        {
                            order.map(item => (
                                <ProductDetails key={item.id} product={item} />
                            ))
                        }

                        <p className="text-2xl mt-20 text-center">
                            Total Price: {''}
                            <span className="font-bold">{total.toFixed(2)}€</span>
                        </p>

                        <form 
                            className="w-full mt-10 space-y-5"
                            action={handleCreateOrder}
                        >

                            <input 
                                type="text"
                                placeholder="Your Name"
                                className="bg-white border border-gray-100 p-2 w-full"
                                name="name"
                            />
                            <input 
                                type="submit"
                                className="py-2 rounded uppercase text-white bg-black w-full text-center font-bold cursor-pointer"
                                value='Confirm Order'
                            />
                        </form>
                    </div>
                )
            }
        </aside>
    )
}
