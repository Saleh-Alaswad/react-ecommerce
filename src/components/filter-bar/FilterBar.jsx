import React from 'react'
import './FilterBar.scss'
import FilterMenu from '../filter-menu/FilterMenu'
import Dropdown from '../Dropdown';
const FilterBar = ({ }) => {
    return (
        <div className="filter-bar">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />

        </div>
    );
}

export default FilterBar;