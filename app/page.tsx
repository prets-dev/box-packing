'use client'

import Products from "@/components/products";
import { Product } from "@/types";
import { Container } from "@mantine/core";
import { useState } from "react";
import productList from "@/data/products.json";
import Boxes from "@/components/boxes";
import allocateBoxes from "@/utils/allocate-boxes";

export default function Home() {
  const [products, setProducts] = useState<Product['name'][]>([]);
  const parsedProducts = (productList as Product[]).filter((product) => products.includes(product.name));

  return (
    <Container size="xs" mt={50}>
      <Products
        values={products}
        onChange={setProducts}
      />
      <Boxes values={allocateBoxes(parsedProducts)} />
    </Container>
  );
}
