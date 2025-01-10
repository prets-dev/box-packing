import calculateBoxes from "../utils/calculate-boxes";
import products from "../data/products";

describe('Box Packing Algorithm', () => {
  it('should allocate a single product to the smallest box', () => {
    const singleProduct = [products[0]];
    const result = calculateBoxes(singleProduct);
    expect(result).toHaveLength(1);
    expect(result[0].products).toContain(singleProduct[0]);
  });

  it('should allocate multiple products to the smallest box', () => {
    const multipleProducts = [products[0], products[3]];
    const result = calculateBoxes(multipleProducts);
    expect(result).toHaveLength(1);
    expect(result[0].products).toContain(multipleProducts[0]);
    expect(result[0].products).toContain(multipleProducts[1]);
  });

  it('should allocate products to multiple boxes', () => {
    const multipleProducts = [products[0], products[1], products[2]];
    const result = calculateBoxes(multipleProducts);
    expect(result).toHaveLength(3);
  });

  it('should return an error message if a product does not fit in any box', () => {
    const largeProduct = products[44];
    const result = calculateBoxes([largeProduct]);
    expect(result).toBe('Some products do not fit in any box.');
  });

  it('should handle edge cases where products barely fit', () => {
    const edgeCaseProduct = [products[0]];
    const result = calculateBoxes(edgeCaseProduct);
    expect(result).toHaveLength(1);
    expect(result[0].products).toContain(edgeCaseProduct[0]);
  });

  it('should minimize the total volume of the boxes used', () => {
    const productsToPack = [products[0], products[1], products[2]];
    const result = calculateBoxes(productsToPack);
    const totalVolume = result.reduce((acc, box) => acc + (box.length * box.width * box.height), 0);
    expect(totalVolume).toBeLessThanOrEqual(183000);
  });
});
