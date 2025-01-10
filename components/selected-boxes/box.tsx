import React from "react";
import { Box as BoxType } from "@/types";
import { Accordion, Badge, Group } from "@mantine/core";
import Products from "./products";

const Box: React.FC<BoxType> = ({ name, products }) => {
    return (
        <Accordion.Item key={name} value={name}>
            <Accordion.Control>
                <Group justify="space-between">
                    {name}
                    <Badge variant="filled" color="blue" mr="xs">
                        {products.length} products
                    </Badge>
                </Group>
            </Accordion.Control>
            <Accordion.Panel>
                <Products items={products} />
            </Accordion.Panel>
        </Accordion.Item>
    );
};

export default Box;
