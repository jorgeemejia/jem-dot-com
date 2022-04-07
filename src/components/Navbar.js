import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import img1 from '../images/pkat.png';
import { useState } from 'react';
import img2 from '../images/pkat2.png';



function Navbar(){

    const [logoIsHovered, setLogoIsHovered] = useState(false);

    function hoverHandler(){
        console.log('Hovered!');
        setLogoIsHovered(true);
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='list'>
                    <li>
                        <Link to="/" className='link'>
                            {/* <img className='logo' src={img1} alt="logo"
                            onMouseEnter={hoverHandler}/> */}
                            {logoIsHovered ? <img className='logo' src={img2} alt="logo"/>  : <img className='logo' src={img1} alt="logo" onMouseEnter={hoverHandler} /> }
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