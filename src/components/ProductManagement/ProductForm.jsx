import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {
    const [error, setError] = useState()

    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value;

        if(name.length === 0){
            setError("Please provide a product name")
            return
        }else if(price.length === 0){
            setError('Please provide a price')
            return
        } else if(price.length < 0){
            setError('Price can not be negative')
            return
        }else if (quantity.length === 0) {
            setError('Please add a quantity')
            return
        }else{
            setError('')
        }

        
           const newProduct = {
        name,
        price, 
        quantity
    }
    // console.log(newProject)

        handleProduct(newProduct)
    
    }
 

    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='Product Name' /> <br />
                <input type="text" name="price" placeholder='Product Price' /> <br />
                <input type="text" name="quantity" placeholder='Product Quantity' /> <br />

                <input type="submit" value="Submit" />
            </form>
            {/* state er maddome error dekhabo ekhn ekhane */}
            <p style={{color:'red', border:'1px solid salmon', padding: '20px'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;