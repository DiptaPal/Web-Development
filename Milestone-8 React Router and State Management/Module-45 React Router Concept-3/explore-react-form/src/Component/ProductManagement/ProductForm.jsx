import { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState("");

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // validation
        if (name.length === 0) {
            setError("Please provide a product name.");
            return;
        } else if (price.length === 0) {
            setError("Please provide a price.");
            return;
        } else if (price <= 0) {
            setError("Price can not be zero or negative.");
            return;
        } else if (quantity.length === 0) {
            setError("Please provide a quantity.");
            return;
        } else if (quantity <= 0) {
            setError("Product can not be zero or negative.");
            return;
        } else {
            setError("");
        }

        const newProduct = {
            name,
            price,
            quantity
        }

        handleAddProduct(newProduct);

    }

    return (
        <div className="border rounded p-6">
            <form onSubmit={handleProductSubmit} className="space-y-4">
                <input type="text" placeholder="Product Name" className="input" name="name" id="name" required /><br />
                <input type="text" placeholder="Product Price" className="input" name="price" id="price" required /><br />
                <input type="number" placeholder="Product Quantity" className="input" name="quantity" id="quantity" required />
                <div className="flex justify-center items-center">
                    <input className="cursor-pointer btn w-full" type="submit" value="Submit" />
                </div>
            </form>
            <p>
                <small className="text-red-600">{error}</small>
            </p>
        </div>
    );
};

export default ProductForm;