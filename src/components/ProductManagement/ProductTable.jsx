import React from 'react';

const ProductTable = ({product}) => {
    
    return (
        <div>
            <h1>Product : {product.length}</h1>

            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    product.map((products, index) =>   <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{products.name}</td>
                        <td>${products.price}</td>
                        <td>{products.quantity}</td>
                        <td></td>
                    </tr>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;