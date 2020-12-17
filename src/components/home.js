import React from 'react';
import Header from './header';
import ProductList from './productList';
import Cart from './cart';


const Home = () => {

    return (
        <div>
            < Header />
            <div className='content-container'>
                <div className='left-container'>
                    < ProductList />
                </div>
                <div className='rigth-container'>
                    < Cart />
                </div>
            </div>
        </div>

    );

}

export default Home;