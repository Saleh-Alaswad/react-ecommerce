import React from 'react';
import './Header.scss';
import Modal from '../modal/Modal';
import IconButton from '../Button/IconButton';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import List from '../List/List';
const Header = ({ }) => {
    const modalRef = React.useRef();
    const open = () => {
        modalRef.current.openModal();
    }
    const [favList, setFavList] = React.useState(false)
    const openFavList = () => setFavList(true);
    const closeFavList = () => setFavList(false);
    const [shoppingBag, setShoppingBag] = React.useState(false)
    const openShoppingBag = () => setShoppingBag(true);
    const closeShoppingBag = () => setShoppingBag(false);
    return (
        <div className="header">
            <Modal ref={modalRef}>Hello</Modal>
            <i className="logo"  >
                <Logo />
                <h3>eCommerce</h3>
            </i>
            <div className="app-bar">
                <div className="options">
                    <IconButton onClick={open} iconName='person' title='login' />
                    <IconButton iconName='favorite' title='Favorites' onMouseEnter={openFavList} onMouseLeave={closeFavList} />
                    <IconButton iconName='shopping_basket' title='Shopping bag' onMouseEnter={openShoppingBag} onMouseLeave={closeShoppingBag} />
                </div>
                {favList && <List title='favorites' onMouseEnter={openFavList} onMouseLeave={closeFavList} />}
                {shoppingBag && <List title='shoppingCart' className="right" onMouseEnter={openShoppingBag} onMouseLeave={closeShoppingBag} />}
            </div>
        </div>
    );
}

export default Header;