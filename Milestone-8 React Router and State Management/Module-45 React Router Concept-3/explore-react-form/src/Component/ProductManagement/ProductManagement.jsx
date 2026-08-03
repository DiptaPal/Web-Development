import { useState } from 'react';
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    }

    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;