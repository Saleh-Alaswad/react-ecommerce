import React from 'react'
import './FilterBar.scss'
import Dropdown from '../Dropdown/Dropdown';
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