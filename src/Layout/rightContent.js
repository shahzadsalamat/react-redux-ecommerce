import React from 'react';
import Cart from '../components/cart';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const RightContent = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);
    return (
        <div className="right-content">
            <b>Your Cart</b>
            < Cart/>
            {cart.length > 0 ?
                <Button variant="primary" >Checkout</Button>
                :
                <p>No item in the cart</p>
            }
        </div>
    );
}

export default RightContent;