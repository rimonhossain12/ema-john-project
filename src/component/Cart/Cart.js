import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
    // console.log(price);
    const shipping = 15;
    let total = 0;
    for (const value of cart) {
        total += value.price;
    }
    let tax = (total + shipping) * 0.18
    const grandTotal = total + tax + shipping;
    return (
        <div className="cart-item">
            <h4>Items Ordered: {cart.length}</h4>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <p>GrandTotal : ${grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;