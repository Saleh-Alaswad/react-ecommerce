import React from 'react'
import './FilterBar.scss'
const FilterBar = ({ }) => {
    return (
        <div className="filter-bar">
            <div className="filter">SORT BY</div>
            <div className="filter">PRODUCT TYPE</div>
            <div className="filter">STYLE</div>
            <div className="filter">COLOR</div>
        </div>
    );
}

export default FilterBar;