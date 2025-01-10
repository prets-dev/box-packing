import { Box, Product } from "@/types";
import boxes from "@/data/boxes.json";

const calculateBoxes = (products: Product[]) => {
    const result: Box[] = [];
    let remainingProducts = [...products];

    for (const box of boxes) {
        const boxVolume = box.length * box.width * box.height;
        const boxProducts: Product[] = [];

        remainingProducts = remainingProducts.filter(product => {
            const totalProductsWeightPerBox = boxProducts.reduce((acc, p) => acc + p.weight, 0)
            const totalProductsVolumePerBox = boxProducts.reduce((acc, p) => acc + (p.length * p.width * p.height), 0)
            
            if (
                product.length <= box.length &&
                product.width <= box.width &&
                product.height <= box.height &&
                product.weight <= box.weight_limit &&
                totalProductsWeightPerBox + product.weight <= box.weight_limit &&
                totalProductsVolumePerBox + (product.length * product.width * product.height) <= boxVolume
            ) {
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

export default calculateBoxes;
