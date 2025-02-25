
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
    maxCount?: number;
    increaseBy: (value: number) => void;
};

export interface OnChangeProductArgs {
    product: Product;
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}