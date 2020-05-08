import React from 'react'
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ image, title, id, price, orginalPrice, colors }) => {
    return (
        <Link
            to={{ pathname: `/product/${title}`, state: { id } }}
            className='card'>
            <img src={image} className="background" />
            <div className="info">
                <div className="title">{title}</div>
                <div className="price">{price} €</div>
                <div className="colors">
                    {colors.map(color => <div className="color" style={{ background: color }}></div>)}
                </div>
            </div>
        </Link >
    );
}

export default Card;