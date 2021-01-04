import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHeader from '../Layout/navbar';

const PageNotFound = () => {

    return (
        <div>
            < NavbarHeader />
            <div className="text-align-center padding-top-20px">
                <h3>Your requested page not found!</h3>
                <h4><Link to="../">Click here</Link> to go back home</h4>
            </div>
        </div>
    );
}

export default PageNotFound;