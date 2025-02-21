
export interface Product {
    id: string;
    title: string;
    img?: string;
};

export interface ProductCartProps extends Product {
    count: number;
};

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
};

export interface OnChangeProductArgs {
    product: Product;
    count: number;
}