import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHeader from '../Layout/navbar';

const ThankyouPage = () => {

    return (
        <div>
            < NavbarHeader />
            <div className="text-align-center padding-top-20px">
                <h3>Thank you for shopping!</h3>
                <h4><Link to="../">Click here</Link> to continue shopping</h4>
            </div>
        </div>
    );
}

export default ThankyouPage;