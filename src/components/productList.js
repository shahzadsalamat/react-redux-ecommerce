import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions';
import { Card, Button } from 'react-bootstrap';

const ProductList = () => {
    const searchData = useSelector(state => state.productDataReducer.productData);

    const dispatch = useDispatch()

    return (
        <div>
            <div className="product-container">
                {searchData.map(item => {
                    return (
                        <div className="card-container" key={item.id}>
                            <Card >
                                <div className="product-image">
                                    <img src={item.imageUrl} alt="" />
                                </div>
                                <Card.Body>
                                    <Card.Title><p>Price: {item.price}</p></Card.Title>
                                    <Card.Text>
                                        <b>{item.name}</b>
                                    </Card.Text>                                    
                                </Card.Body>
                                <Button className="card-button" variant="primary" onClick={() => dispatch(addToCart(item))}>Add To Cart</Button>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductList;