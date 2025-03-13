import { create } from "zustand";
import { OrderItem } from "../types/types";
import { Product } from "@prisma/client";


interface Store {
    order: OrderItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: Product['id']) => void;
    increaseQuantity: (id: Product['id']) => void;
    decreaseQuantity: (id: Product['id']) => void;
};

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToCart: (product) => {

        const { categoryId, image, ...data } = product;

        const newProduct: OrderItem = {
            ...data,
            quantity: 1,
            subtotal: 1 * product.price 
        };

        let order: OrderItem[] = [];

        if (get().order.find( item => item.id === product.id)) {
            order = get().order.map(item => item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    subtotal: item.subtotal + product.price
                } : item
            )
        } else {
            order = [...get().order, newProduct]
        }

        set(() => ({
            order
        }))

    },
    
    removeFromCart: (id) => {
        set(state => ({
            order: state.order.filter(item => item.id !== id )
        }))
    },

    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(item => item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    subtotal: item.subtotal + item.price
                } : item 
            )
        }))
    },

    decreaseQuantity: (id) => {

        let order: OrderItem[] = get().order;

        if( get().order.find(item => item.id === id)?.quantity === 1)
            order = get().order.filter(item => item.id !== id )

        else
            order = get().order.map(item => item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    subtotal: item.subtotal - item.price
                } : item 
            )

        set(()=> ({
            order
        }))
    }
}));