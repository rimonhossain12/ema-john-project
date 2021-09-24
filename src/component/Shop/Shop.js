import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
        , [])
    return (

        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={Product.key}
                        product={product}
                    ></Product>)
                }
            </div>
            <div>
                <h1>Order Summary</h1>
            </div>
        </div>

    );
};

export default Shop;