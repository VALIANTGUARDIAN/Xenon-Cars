import React from 'react';
import './Home.css';
import products from '../../Products';
import Product from '../product/Product';

const Home = () => {
    return (
        <div>
            <div className="row justify-content-center">
                {products.map(products=>{
                    return <Product product = {products}/>
                })}
            </div>
        </div>
    );
}

export default Home;
