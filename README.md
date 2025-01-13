# Box Packing Algorithm App

This is a React application that implements a packing algorithm to determine the smallest box or collection of boxes required to fit a set of products. The project demonstrates skills in React, TypeScript, and UI development, as well as the ability to solve algorithmic problems and write clean, reusable code.

## Demo Live Site

You can view a live demo of the application at the following link:
[Box Packing Algorithm App Live Demo](https://box-packing.vercel.app)

## Getting Started

### How to Install and Run the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/prets-dev/box-packing-app.git
    cd box-packing-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

4. **Open the app in your browser**:
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Instructions on How to Use the App

1. **Select Products**:
    - Use the product multi-select dropdown to choose up to 10 products from the predefined list.

2. **View Box Allocation**:
    - The app will display the selected boxes and how the products are distributed among them.
    - If a product cannot be packed, an error message will be shown.

### Examples of Inputs and Expected Outputs

#### Example 1: Allocate a single product to the smallest box

**Input**:

    [
        {
            "id": 1,
            "name": "Wireless Mouse",
            "length": 10,
            "width": 8,
            "height": 5,
            "weight": 0.5
        }
    ]

**Expected Output**:

    [
        {
            "id": 1,
            "name": "BOX A",
            "length": 20,
            "width": 15,
            "height": 10,
            "weight_limit": 5,
            "products": [
                {
                    "id": 1,
                    "name": "Wireless Mouse",
                    "length": 10,
                    "width": 8,
                    "height": 5,
                    "weight": 0.5
                }
            ]
        }
    ]

#### Example 2: Allocate multiple products to the smallest box

**Input**:

    [
        {
            "id": 1,
            "name": "Wireless Mouse",
            "length": 10,
            "width": 8,
            "height": 5,
            "weight": 0.5
        },
        {
            "id": 5,
            "name": "Phone Charger",
            "length": 8,
            "width": 6,
            "height": 3,
            "weight": 0.2
        }
    ]

**Expected Output**:

    [
        {
            "id": 1,
            "name": "BOX A",
            "length": 20,
            "width": 15,
            "height": 10,
            "weight_limit": 5,
            "products": [
                {
                    "id": 1,
                    "name": "Wireless Mouse",
                    "length": 10,
                    "width": 8,
                    "height": 5,
                    "weight": 0.5
                },
                {
                    "id": 5,
                    "name": "Phone Charger",
                    "length": 8,
                    "width": 6,
                    "height": 3,
                    "weight": 0.2
                }
            ]
        }
    ]

#### Example 3: Allocate products to multiple boxes

**Input**:

    [
        {
            "id": 1,
            "name": "Wireless Mouse",
            "length": 10,
            "width": 8,
            "height": 5,
            "weight": 0.5
        },
        {
            "id": 2,
            "name": "Gaming Keyboard",
            "length": 45,
            "width": 15,
            "height": 4,
            "weight": 1.5
        },
        {
            "id": 3,
            "name": "Laptop Stand",
            "length": 30,
            "width": 20,
            "height": 10,
            "weight": 2.0
        }
    ]

**Expected Output**:

    [
        {
            "id": 1,
            "name": "BOX A",
            "length": 20,
            "width": 15,
            "height": 10,
            "weight_limit": 5,
            "products": [
                {
                    "id": 1,
                    "name": "Wireless Mouse",
                    "length": 10,
                    "width": 8,
                    "height": 5,
                    "weight": 0.5
                }
            ]
        },
        {
            "id": 2,
            "name": "BOX B",
            "length": 30,
            "width": 25,
            "height": 20,
            "weight_limit": 10,
            "products": [
                {
                    "id": 3,
                    "name": "Laptop Stand",
                    "length": 30,
                    "width": 20,
                    "height": 10,
                    "weight": 2
                }
            ]
        },
        {
            "id": 3,
            "name": "BOX C",
            "length": 60,
            "width": 55,
            "height": 50,
            "weight_limit": 50,
            "products": [
                {
                    "id": 2,
                    "name": "Gaming Keyboard",
                    "length": 45,
                    "width": 15,
                    "height": 4,
                    "weight": 1.5
                }
            ]
        }
    ]

#### Example 4: Return an error message if a product does not fit in any box

**Input**:

    [
        {
            "id": 45,
            "name": "Vacuum Cleaner",
            "length": 70,
            "width": 40,
            "height": 30,
            "weight": 8.0
        }
    ]

**Expected Output**:

    Some products do not fit in any box.

#### Example 5: Handles product that barely fit

**Input**:

    [
        {
            "id": 2,
            "name": "Gaming Keyboard",
            "length": 45,
            "width": 15,
            "height": 4,
            "weight": 1.5
        },
    ]

**Expected Output**:

    [
        {
            "id": 3,
            "name": "BOX C",
            "length": 60,
            "width": 55,
            "height": 50,
            "weight_limit": 50,
            "products": [
                {
                    "id": 2,
                    "name": "Gaming Keyboard",
                    "length": 45,
                    "width": 15,
                    "height": 4,
                    "weight": 1.5
                }
            ]
        }
    ]

### Known Limitations or Edge Cases

1. **Product Dimensions**:
    - If a product's dimensions exceed the largest available box, it cannot be packed, and an error message will be displayed.

2. **Weight Limit**:
    - If the total weight of the products in a box exceeds the box's weight limit, the product cannot be packed in that box.

3. **Volume Optimization**:
    - The algorithm aims to minimize the total volume of the boxes used, but it may not always find the absolute optimal solution for complex scenarios.

4. **Product Quantity**:
    - The current implementation does not handle multiple quantities of the same product. Each product is considered unique.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
