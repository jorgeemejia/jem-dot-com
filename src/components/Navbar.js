import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import img1 from '../images/pkat.png';

function Navbar(){
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='list'>
                    <li>
                        <Link to="/" className='link'>
                            <img className='logo' src={img1} alt="logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className='link'>Products</Link>
                    </li>
                    <li>
                        <Link to="/services" className='link'>Services</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;