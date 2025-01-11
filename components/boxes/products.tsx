import { Product } from "@/types";
import { Table } from "@mantine/core"

const Products: React.FC<{ items: Product[] }> = ({ items }) => {
    const rows = items.map((product) => (
        <Table.Tr key={product.name}>
          <Table.Td>{product.name}</Table.Td>
          <Table.Td>{product.length}</Table.Td>
          <Table.Td>{product.weight}</Table.Td>
          <Table.Td>{product.height}</Table.Td>
          <Table.Td>{product.weight}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table withTableBorder striped mt="xs">
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Length</Table.Th>
                    <Table.Th>Width</Table.Th>
                    <Table.Th>Height</Table.Th>
                    <Table.Th>Weight</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    )
}

export default Products
