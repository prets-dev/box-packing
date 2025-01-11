'use client'

import ProductsMultiSelect from "@/components/products-multi-select";
import { Product } from "@/types";
import { Container } from "@mantine/core";
import { useState } from "react";
import productList from "@/data/products.json";
import SelectedBoxes from "@/components/selected-boxes";
import calculateBoxes from "@/utils/calculate-boxes";

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState<Product['name'][]>([]);
  const products = (productList as Product[]).filter((product) => selectedProducts.includes(product.name));

  return (
    <Container size="xs" mt={50}>
      <ProductsMultiSelect
        values={selectedProducts}
        onChange={setSelectedProducts}
      />
      <SelectedBoxes boxes={calculateBoxes(products)} />
    </Container>
  );
}
