import React from 'react';
import Data from '../data.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';
import { Card, Button } from 'react-bootstrap';

const ProductList = () => {

    const dispatch = useDispatch()
    return (
        <>
            <div className="product-container">
                {Data.map(item => {
                    return (
                        <div className="card-container">
                            <Card >
                                <div className="product-image">
                                    <img src={item.imageUrl} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title><p>Price: {item.price}</p></Card.Title>
                                    <Card.Text>
                                        <b>{item.name}</b>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => dispatch(addToCart(item))}>Add To Cart</Button>
                                </Card.Body>
                            </Card>

                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProductList;