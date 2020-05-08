import React, { useState } from 'react'
import './Product.scss'
import Quantity from '../../components/quantity/Quantity';
import { Link, useLocation } from 'react-router-dom';
import ReactSelect from '../../components/select/Select';
import MainMenu from '../../components/main-menu/MainMenu';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, addToCart } from '../../redux/actions';
const Product = ({ match }) => {

    const location = useLocation();
    const { id } = location.state;
    const product = useSelector(state => state.products['men'].find(p => p.id === id))
    const { image, title, price, size, description } = product
    const dispatch = useDispatch()
    const addToShoppingCart = (id, size, quantity) => {
        dispatch(addToCart(id, size, quantity))
    }
    const addToFavorites = (id, size) => {
        dispatch(addToList(id, size))
    }

    const [choosedSize, setChoosedSize] = useState(size[0])
    const handleSizeChange = (e) => {
        let { value } = e;
        setChoosedSize(value)
    }
    const handleQuantityChange = (v) => {
        setQuantity(v)
    }
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="main">
            <MainMenu />

            <div className="product">
                <div className="image-container">
                    <img src={image} alt={title} width="500" />
                </div>
                <div className="info">
                    <div className="title">
                        <h2>{title}</h2>
                        <button onClick={() => addToFavorites(id, choosedSize)} className="material-icons fav">favorite</button>
                    </div>
                    <div className="price">
                        <span className="price-value">{price}€</span>
                        {/* {oldPrice && <small className="price-value-original">{oldPrice} €</small>} */}
                        {/* {oldPrice && <div className="percentage-discount">{percentageDiscount} €</div>} */}
                    </div>
                    <div className="selector">
                        <Quantity onChange={handleQuantityChange} value={quantity} />
                        <ReactSelect onChange={handleSizeChange} options={size} />
                        <button onClick={() => addToShoppingCart(id, choosedSize, quantity)} >ADD TO BAG</button>
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Product;