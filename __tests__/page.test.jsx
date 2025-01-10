import { render, screen, userEvent } from '../utils/tests';
import ProductsMultiSelect from '../components/products-multi-select';
import { MultiSelect } from '@mantine/core';
import products from "../data/products";

function ProductsMultiSelect() {
  const data = products.map((product) => ({ value: product.name, label: product.name }))
  return (
    <MultiSelect
      name="products"
      label="Select products"
      data={data}
    />
  );
}

describe('MultiSelect Component', () => {
  it('selects multiple options', async () => {
    const data = products.map((product) => ({ value: product.name, label: product.name }));
    render(
      <MultiSelect
        name="products"
        label="Select products"
        data={data}
      />
    );
  
    await userEvent.click(screen.getByRole('textbox', { name: 'Select products' }));
  
    await userEvent.click(screen.getByRole('option', { name: 'Wireless Mouse' }));
    await userEvent.click(screen.getByRole('option', { name: 'Gaming Keyboard' }));
  
    expect(document.querySelector('input[name="products"]')).toHaveValue('Wireless Mouse,Gaming Keyboard');
  });
})
