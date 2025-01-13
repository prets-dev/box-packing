import allocateBoxes from "../utils/allocate-boxes";
import productList from "../data/products";

describe('Box Packing Algorithm', () => {
  it('should allocate a single product to the smallest box', () => {
    const products = [productList[0]];
    const result = allocateBoxes(products);
    expect(result).toHaveLength(1);
    expect(result[0].products).toContain(products[0]);
  });

  it('should allocate multiple products to the smallest box', () => {
    const products = [productList[0], productList[3]];
    const result = allocateBoxes(products);
    expect(result).toHaveLength(1);
    expect(result[0].products).toContain(products[0]);
    expect(result[0].products).toContain(products[1]);
  });

  it('should allocate products to multiple boxes', () => {
    const products = [productList[0], productList[1], productList[2]];
    const result = allocateBoxes(products);
    expect(result).toHaveLength(3);
  });

  it('should return an error message if a product does not fit in any box', () => {
    const products = [productList[44]];
    const result = allocateBoxes(products);
    expect(result).toBe('Some products do not fit in any box.');
  });

  it('should handle edge cases where products barely fit', () => {
    const products = [productList[1]];
    const result = allocateBoxes(products);
    expect(result).toHaveLength(1);
    expect(result[0].products).toContain(products[0]);
    expect(result[0].name).toBe('BOX C');
  });

  it('should minimize the total volume of the boxes used', () => {
    const products = [productList[0], productList[3]];
    const result = allocateBoxes(products);
    const totalBoxVolume = result.reduce((acc, box) => acc + (box.length * box.width * box.height), 0);
    const totalProductVolume = products.reduce((acc, product) => acc + (product.length * product.width * product.height), 0);

    expect(totalBoxVolume).toBeGreaterThanOrEqual(totalProductVolume);
  });
});
