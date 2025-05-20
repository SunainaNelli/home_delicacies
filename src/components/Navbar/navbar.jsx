import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';




const Navbar = React.memo(() => {
    return(
         <nav className='nav-bar'>
                             <ul>
                                <li><Link to='/home/pickles' >Pickles</Link></li>
                                <li><Link to='/home/podi' >Podi</Link></li>
                                <li><Link to='/home/snacks'>Evening Snacks</Link></li>
                            </ul>    
                     </nav>
    );
});


export default Navbar;