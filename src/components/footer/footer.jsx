import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to='/home_delicacies/home'>Home</Link></li>
                        <li><Link to='/home_delicacies/home/pickles'>Pickles</Link></li>
                        <li><Link to='/home_delicacies/home/podi'>Podi</Link></li>
                        <li><Link to='/home_delicacies/home/snacks'>Evening Snacks</Link></li>
                        <li><Link to='/home_delicacies/cart'>Cart</Link></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h4>Contact Us</h4>
                    <p>Email: contact@homedelicacies.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className='footer-section'>
                    <h4>Follow Us</h4>
                    <ul className='social-media'>
                        <li><a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
                        <li><a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
                        <li><a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2025 Home Delicacies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;