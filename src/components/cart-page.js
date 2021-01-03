import React from 'react';
import { useSelector } from 'react-redux';
import NavbarHeader from '../Layout/navbar';
import { Button } from 'react-bootstrap';

const CartPage = () => {
    const cart = useSelector((state) => state.cartReducer.cartItems);

    const TotalAmount = cart
        .map(item => item.price)
        .reduce((prev, curr) => prev + curr, 0);


    return (
        <div>
            < NavbarHeader />
            {
                cart.map((item) => {
                    return (
                        <div className="cart-page-container">

                            <div className="cart-item-container">
                                <div className="cart-item-image-wrapper">
                                    <img src={item.imageUrl} alt="" />
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
            <div>
                <h3>Total Amount: {TotalAmount}</h3>
                <Button variant="primary">Procced</Button>
            </div>

        </div>
    );
}

export default CartPage;