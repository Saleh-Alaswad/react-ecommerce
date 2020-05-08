import React from 'react';
import './Main.scss';
import MainMenu from '../../components/main-menu/MainMenu';
import Advertisement from '../../components/advertisement/Advertisement';


const Main = () => {
    return (
        <div className="main-section">
            <MainMenu />
            <Advertisement image='image' content='Keep it short' button='SHOP NOW' />
            <Advertisement content='Become a member and get 10% off your next purchase' button='JOIN NOW' />


        </div>
    );
}

export default Main;