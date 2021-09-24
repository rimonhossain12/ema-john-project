import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAddCart = (product) => {
        console.log(product);
    }


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
                        handleAddCart={handleAddCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>

    );
};

export default Shop;