import React from 'react';
import products from '../../Products';

const ProductDescription = ({match}) => {
    const productId = match.params.id
    const product = products.find(product => product.id == productId)
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <h1>{product.name}</h1>
                        <img src={product.image} className="img-fluid m-3 big-img"/>
                        <p>{products.description}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="m-2">
                        <h1>{product.Price}</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <h1>this is product disc</h1>
        </div>
    );
}

export default ProductDescription;
