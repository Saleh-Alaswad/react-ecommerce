import React from 'react';
import './List.scss';
import { useSelector, useDispatch } from 'react-redux'
const List = ({ title, onMouseEnter, onMouseLeave, className }) => {

    const favoritesList = useSelector(state => state[title]);
    return (
        <div {...onMouseEnter} {...onMouseLeave} className={`list ${className}`}>
            {favoritesList.map(item => <Item {...item} key={item.id} />)}
        </div>
    );
}
export const Item = ({ id, size, quantity }) => {
    const { title, image, price } = useSelector(state => state.products.men.find(item => item.id === id))

    return (
        <div className="list-item">
            <img className='image' src={image} alt={title} />
            <div className="product-info">
                <p>{title}</p>
                <p>{price}€</p>
                <p>Quantity: {quantity}</p>
                <p>Color: White</p>
                <p>Size: {size}</p>
                <p>Total: {price}€</p>
            </div>
        </div>
    )
}

export default List;