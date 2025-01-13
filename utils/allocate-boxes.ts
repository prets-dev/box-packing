import { Box, Product } from "@/types";
import boxes from "@/data/boxes.json";

const calculateVolume = (data: Product | Box) => data.length * data.width * data.height;

const canFit = (product: Product, box: Box, totalProductVolume: number, totalProductWeight: number) => {
    const boxVolume = calculateVolume(box);
    const productVolume = calculateVolume(product);

    return (
        product.length <= box.length &&
        product.width <= box.width &&
        product.height <= box.height &&
        product.weight <= box.weight_limit &&
        totalProductWeight + product.weight <= box.weight_limit &&
        totalProductVolume + productVolume <= boxVolume
    )
}

const allocateBoxes = (products: Product[]) => {
    const result: Box[] = [];
    let remainingProducts = [...products];

    for (const box of (boxes as Box[])) {
        const boxProducts: Product[] = [];

        remainingProducts = remainingProducts.filter(product => {
            const totalProductWeight = boxProducts.reduce((acc, p) => acc + p.weight, 0)
            const totalProductVolume = boxProducts.reduce((acc, p) => acc + (p.length * p.width * p.height), 0)
            
            if (canFit(product, box, totalProductVolume, totalProductWeight)) {
                boxProducts.push(product);
                return false;
            }
            return true;
        });

        if (boxProducts.length > 0) {
            result.push({ ...box, products: boxProducts });
        }
    }

    if (remainingProducts.length > 0) {
        return "Some products do not fit in any box.";
    }

    return result;
}

export default allocateBoxes;
