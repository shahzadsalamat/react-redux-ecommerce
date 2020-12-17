import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeToCart} from '../actions';

const Cart = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);
    const dispatch = useDispatch();
    return (
        <>
            {cart.map((item) => {
                return (
                    <div>
                        {item.id} : {item.price} : <img src={item.imageUrl} alt="product" className="cart-img" />
                        <button onClick={() => dispatch(removeToCart(item))}>Remove</button>
                    </div>
                    );
            })}
        </>
    );
}

export default Cart;