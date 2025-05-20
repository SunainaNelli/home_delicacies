import React, { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


export default function Header() {
    const {cartItems} = useContext(CartContext);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className='header-container'>
             <header className="header">
                 <div className="logo">Home Delicacies</div>
            
                 <nav className="nav-links">
                     <Link to='/home'><i className="fas fa-solid fa-house"></i></Link>
                     <Link to='/cart'>
                     <i className="fas fa-shopping-cart"></i>
                     {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
                     </Link>
                     <a href="#login"><i className="fas fa-thin fa-user"></i></a>
                 </nav>
                
             </header>
            
        </div>    
    );
}