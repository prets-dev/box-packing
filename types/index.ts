type Bindable = {
    id: number;
}

type Dimension = { 
    length: number;
    width: number;
    height: number
};

export type Product = {
    name: string;
    weight: number;
} & Dimension & Bindable

export type Box = {
    name: string;
    weight_limit: number;
    products: Product[];
} & Dimension & Bindable
