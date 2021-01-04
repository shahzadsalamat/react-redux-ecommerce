import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToCart } from '../actions';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);

    const dispatch = useDispatch();

    return (
        <div>
            {cart.map((item) => {
                return (
                    <div >
                        <div className="side-menu-cart-page-container">
                            <div className="side-menu-cart-item-container">
                                <div className="side-menu-cart-item-image-wrapper">
                                    <img src={item.imageUrl} alt="" />
                                </div>
                                <div className="side-menu-cart-item-details-wrapper">
                                    <div><strong>{item.name}</strong></div>
                                    <div><strong>price: </strong>{item.price}</div>
                                </div>
                            </div>
                            <Button variant="danger" onClick={() => dispatch(removeToCart(item))}>Remove</Button>

                            <hr></hr>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;