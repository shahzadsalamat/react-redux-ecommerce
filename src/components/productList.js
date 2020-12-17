import React from 'react';
import Data from '../data.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions';

const ProductList = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);
    const dispatch = useDispatch()
    return (
        <div>
            <p>Number of items in cart: {cart.length}</p>
            {Data.map(item => {
                return (
                    <div>
                        {item.id} || {item.price} || <img src={item.imageUrl} alt="product" className="product-img" />
                        <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;