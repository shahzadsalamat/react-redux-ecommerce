import React from 'react';
import {useSelector} from 'react-redux';
import NavbarHeader from '../Layout/navbar'

const CartPage = () => {
    const cart = useSelector((state) => state.cartReducer.cartItems)
    return (
        <div>
            < NavbarHeader/>
            <p>hi there, i am cart page</p>
            {
                cart.map((item) => {
                    return (
                        <div>
                            {item.name}
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CartPage;