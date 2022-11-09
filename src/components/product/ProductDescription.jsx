import React from 'react';
import Product from './Product';

const ProductDescription = ({match}) => {
    const productId = match.params.id
    return (
        <div>
            <h1>Product Description</h1>
            <h1> The product ID  is {productId}</h1>
        </div>
    );
}

export default ProductDescription;
