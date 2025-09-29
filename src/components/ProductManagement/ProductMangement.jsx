import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductMangement = () => {

    const [product, setProduct] = useState([]);

    const handleProduct = newProject =>{
        const newProducts = [...product, newProject];
        setProduct(newProducts);
    }



    return (
        <div>
            <ProductForm handleProduct={handleProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductMangement;