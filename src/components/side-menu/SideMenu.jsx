import React from 'react'
import { Link } from 'react-router-dom';

const SideMenu = ({ match, className }) => {
    return (
        <div className={className}>
            <nav>
                <ul >
                    <li >
                        <strong >New Arrivals</strong>
                        <ul >
                            <li >
                                <Link to={match.url} >Clothes</Link>
                            </li>
                            <li >
                                <Link to={`${match.url}?product=shoes`}> Shoes &amp; Accessories</Link>
                            </li>
                            <li >
                                <Link to={`${match.url}?product=jeans`}> Jackets</Link>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <strong >Product</strong>
                        <ul >
                            <li >
                                <Link to={match.url} >Hoodies &amp; Sweatshirts</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Cardigans &amp; Jumpers</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Jackets &amp; Coats</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Shirts</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Blazers &amp; Suits</Link>
                            </li>
                            <li >
                                <Link to={match.url}> T-Shirts &amp; Tanks</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Trousers</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Jeans</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Accessories</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Shoes</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Socks</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Nightwear</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Underwear</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Sportwear</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Shorts</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Swimwear</Link>
                            </li>
                        </ul>
                    </li>
                    <li >
                        <strong >Sale</strong>
                        <ul >
                            <li >
                                <Link to={match.url} >T-Shirts</Link>
                            </li>
                            <li >
                                <Link to={match.url}> Shoes </Link>
                            </li>
                            <li >
                                <Link to={match.url}> Trousers</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideMenu;