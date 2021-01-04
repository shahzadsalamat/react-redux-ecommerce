import React from 'react';
import NavbarHeader from '../Layout/navbar';
import LeftContent from '../Layout/leftContent';
import MiddleContent from '../Layout/middleContent';
import RightContent from '../Layout/rightContent';

const Home = () => {

    return (
        <div>
            < NavbarHeader />
            <div className="content">
                <LeftContent />
                <MiddleContent />
                <RightContent />
            </div>
        </div>

    );
}

export default Home;