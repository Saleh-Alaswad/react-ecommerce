import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <nav className="footer-category">
                <h4 className="footer-heading">SHOP</h4>
                <div className="footer-item">Women</div>
                <div className="footer-item">Men</div>
                <div className="footer-item">Kids</div>
                <div className="footer-item">Accessoires</div>
            </nav>
            <nav className="footer-category">
                <h4 className="footer-heading">INFO</h4>
                <div className="footer-item">Career</div>
                <div className="footer-item">About Us</div>
                <div className="footer-item">Sustainability</div>
                <div className="footer-item">Press</div>
            </nav>
            <nav className="footer-category">
                <h4 className="footer-heading">HELP</h4>
                <div className="footer-item">Account</div>
                <div className="footer-item">Locator</div>
                <div className="footer-item">Contact</div>
                <div className="footer-item">Gift Cards</div>
            </nav>
        </div>
    );
}

export default Footer;