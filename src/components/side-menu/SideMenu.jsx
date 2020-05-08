import React from 'react'
import { Link } from 'react-router-dom';

const list = {
    newArrivals: [
        'Clothes',
        'Shoes & Accessoires',
        'Jackets'
    ],
    product: [
        'Hoodies & Sweatshirts',
        'Cardigans & Jumpers',
        'Jackets & Coats',
        'Shirts',
        'Blazers & Suits',
        'T-Shirts & Tanks',
        'Trousers',
        'Jeans',
        'Jackets & Coats',
        'Shirts',
        'Accessories',
        'Shoes',
        'Socks',
        'Nightwear',
        'Underwear',
        'Sportwear',
        'Shorts',
        'Swimwear',
    ],
    sale: [
        'T-Shirts',
        'Shoes',
        'Trousers'
    ]
}

const SideMenu = ({ match, className }) => {
    return (
        <div className={className}>
            <nav>
                <ul >
                    <li >
                        <strong >New Arrivals</strong>
                        <ul >
                            {list.newArrivals.map(product => <li ><Link to={`${match.url}/${product}`} >{product}</Link></li>)}
                        </ul>
                    </li>
                    <li >
                        <strong >Product</strong>
                        <ul >
                            {list.product.map(product => <li ><Link to={`${match.url}/${product}`} >{product}</Link></li>)}
                        </ul>
                    </li>
                    <li >
                        <strong >Sale</strong>
                        <ul >
                            {list.sale.map(product => <li ><Link to={`${match.url}/${product}`} >{product}</Link></li>)}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideMenu;