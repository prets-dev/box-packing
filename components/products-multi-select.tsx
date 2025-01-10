import React, { Dispatch, SetStateAction } from 'react';
import { MultiSelect } from "@mantine/core";
import productList from "@/data/products.json";
import { Product } from '@/types';

const MAX_PRODUCTS = 10;

const ProductsMultiSelect: React.FC<{
    values: Product['name'][];
    onChange: Dispatch<SetStateAction<Product['name'][]>>;
}> = ({
    values,
    onChange,
}) => {
    const data = productList.map((product: Product) => ({ value: product.name, label: product.name }));
    return (
        <div>
            <MultiSelect
                name='products'
                data={data}
                maxDropdownHeight={300}
                label="Select products"
                placeholder={MAX_PRODUCTS - values.length ? `Select ${MAX_PRODUCTS - values.length} product/s...` : `You can only select up to ${MAX_PRODUCTS} products.`}
                clearable
                checkIconPosition="left"
                maxValues={MAX_PRODUCTS}
                value={values}
                onChange={(values) => onChange(values)}
                searchable
            />
        </div>
    );
};

export default ProductsMultiSelect;
