import React from 'react';
import Card from '../../components/card/Card';
import './Category.scss';

import MainMenu from '../../components/main-menu/MainMenu';
import SideMenu from '../../components/side-menu/SideMenu'
import { useSelector } from 'react-redux'
import FilterBar from '../../components/filter-bar/FilterBar';
const queryString = require('query-string');

const Category = ({ location, match }) => {
    const search = queryString.parse(location.search);
    const category = match.params.category;
    const products = useSelector(state => state.products.men/* [ category] */)

    return (
        <div className="category">
            <MainMenu />
            <div className="main">
                <div className="menu-bar">
                    <SideMenu match />
                </div>
                <div className="filter">
                    <FilterBar /* className='filter' */ />
                </div>
                <div className="content">
                    {products.map(product => <Card key={product.id}  {...product} route='product' />)}
                </div>

            </div>

        </div>
    );
}

export default Category;