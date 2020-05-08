import React from 'react'
import './MainMenu.scss'
import { Link } from 'react-router-dom';


const MainMenu = ({ }) => {
    return (
        <div className="main-menu">
            <Link className='link' to='/cat/men'>Men</Link>
            <Link className='link' to='/cat/women'>Women</Link>
            <Link className='link' to='/cat/divided'>Divided</Link>
            <Link className='link' to='/cat/kids'>kids</Link>
            <Link className='link' to='/cat/accessoires'>Accessoires</Link>
            <Link className='link' to='/cat/sale'>Sale</Link>
        </div>
    );
}

export default MainMenu;