import React, { useState } from 'react';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../actions';


const NavbarHeader = () => {
    const cart = useSelector(state => state.cartReducer.cartItems);
    const [searchKeyword, setSearchKeyWord] = useState('')
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/react-redux-ecommerce/">Home</Nav.Link>
                    <Nav.Link as={Link} to="../react-redux-ecommerce/components/cart-page.js">Your Cart ({cart.length})</Nav.Link>
                </Nav>
                {(window.location.pathname === '/react-redux-ecommerce/')
                    ?
                    <Form inline onSubmit={(e) => e.preventDefault()}>
                        <FormControl
                            type="text"
                            placeholder="Search By Product Name"
                            name="search"
                            className="mr-sm-2"
                            value={searchKeyword}
                            onChange={(e) => { setSearchKeyWord(e.target.value) }}
                        />
                        <Button
                            variant="outline-info"
                            onClick={(e) => dispatch(searchProduct(searchKeyword))}
                        >Search</Button>
                    </Form>
                    : null}
            </Navbar>
        </div>
    )
}

export default NavbarHeader;