
export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
};