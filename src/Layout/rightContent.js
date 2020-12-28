import React from 'react';
import Cart from '../components/cart';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const RightContent = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);
    return (
        <div className="right-content">
            <b>Your Cart</b>
            < Cart />
            {cart.length > 0 ?
                <Link to="../components/cart-page.js">
                    <Button variant="primary">check out</Button>
                </Link>
                :
                <p>No item in the cart</p>
            }
        </div>
    );
}

export default RightContent;