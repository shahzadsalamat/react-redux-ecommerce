import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToCart } from '../actions';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    return (
        <>
            {cart.map((item) => {
                return (
                    <div className="cart-container">
                        <img className="cart-img" variant="top" src={item.imageUrl} alt="" />
                        <p>Price: {item.price}</p>
                        <b>Name: {item.name}</b>
                        <Button variant="danger" onClick={() => dispatch(removeToCart(item))}>Remove</Button>
                    </div>
                );
            })}
        </>
    );
}

export default Cart;