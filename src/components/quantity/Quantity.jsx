import React from 'react';
import './Quantity.scss';

const Quantity = ({ value, onChange }) => {

    const decrement = () => {
        if (value > 1) {
            onChange(value - 1)
        }
    }
    const increment = () => {
        if (value < 20) {
            onChange(value + 1)
        }
    }
    return (

        <div className="quantity-input">
            <button className="modifier-input" onClick={decrement}>
                &mdash;
            </button>
            <input className="quantity-input_screen" type="text" value={value} readOnly />
            <button className="modifier-input" onClick={increment}>
                &#xff0b;
            </button>
        </div>

    );

}
export default Quantity;