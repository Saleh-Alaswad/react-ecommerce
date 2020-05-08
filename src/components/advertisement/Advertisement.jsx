import React from 'react';
import { Link } from 'react-router-dom';
import './Advertisement.scss';

const Advertisement = ({ image, content, button }) => {
    return (
        <div className={`advertisement ${image}`} >
            <div className="content">
                <h2>{content}</h2>
                <p>Cool and casual shorts for summer</p>
                <Link className='btn' to='/category/men'>{button}</Link>
            </div>
        </div>
    );
}

export default Advertisement;