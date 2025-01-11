import { render, screen, userEvent } from '../utils/tests';
import Products from '../components/products';

describe('Products Component', () => {
  it('selects multiple options', async () => {
    let selectedProducts = [];
    const setSelectedProducts = jest.fn((newValue) => {
      selectedProducts = newValue;
    });
    render(
      <Products
        values={selectedProducts}
        onChange={setSelectedProducts}
      />
    );
  
    await userEvent.click(screen.getByRole('textbox', { name: 'Select products' }));
  
    await userEvent.click(screen.getByRole('option', { name: 'Wireless Mouse' }));
    await userEvent.click(screen.getByRole('option', { name: 'Gaming Keyboard' }));
  
    expect(document.querySelector('input[name="products"]')).toHaveValue('Wireless Mouse,Gaming Keyboard');
  });
})
