import React from 'react';
import { useSelector } from 'react-redux';
import NavbarHeader from '../Layout/navbar';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CartPage = () => {
    const cart = useSelector((state) => state.cartReducer.cartItems);

    const history = useHistory();

    const TotalAmount = cart
        .map(item => item.price)
        .reduce((prev, curr) => prev + curr, 0);

    const handleClick = () => {
        history.push('./thankyou-page.js')
    }

    return (
        <div>
            < NavbarHeader />
            {
                cart.map((item) => {
                    return (
                        <div className="cart-page-container padding-top-20px">
                            <div className="cart-item-container">
                                <div className="cart-item-image-wrapper">
                                    <img src={'..' + item.imageUrl} alt="" />
                                </div>
                                <div className="cart-item-details-wrapper">
                                    <div><strong>Product Name: </strong>{item.name}</div>
                                    <div><strong>Product price: </strong>{item.price}</div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })
            }
            {
                (TotalAmount > 0) ?
                    (
                        <div className="text-align-center padding-top-20px">
                            <h3>Total Amount: {TotalAmount}</h3>
                            <Button variant="primary" onClick={handleClick}>Procced</Button>
                        </div>
                    ) :
                    (<div className="text-align-center padding-top-20px">
                        <h3>Your cart is empty</h3>
                    </div>)
            }

        </div>
    );
}

export default CartPage;