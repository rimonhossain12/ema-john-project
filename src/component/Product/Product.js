import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    // console.log(props.product)
    // show product in the UI
    const { name, img, price, seller, stock } = props.product;
    // font awesome element
    const fontIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-list">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>price: ${price}</p>
                <p><small>Only small {stock} left in stock-order soon</small></p>
                <button
                    className="btn-regular">{fontIcon} add to Cart</button>
            </div>
        </div>
    );
};

export default Product;