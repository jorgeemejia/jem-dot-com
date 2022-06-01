import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import wink from '../../images/pkat.png';
import { useState } from 'react';
import noWink from '../../images/pkat2.png';
import  borger  from "../../images/borger.png";
import borger2 from "../../images/borger2.png";
import BorgerMenu from "./BorgerMenu";


function Navbar(){

    const [clicked, setClick] = useState(false);

    function clickHandler(){
        setClick(!clicked);
        console.log("borger click");
    }

    const [logoIsHovered, setLogoIsHovered] = useState(false);


    function hoverHandler(){
        console.log('Hovered!');
        setLogoIsHovered(true);
    }
    function hoverHandler2(){
        console.log('Un Hovered');
        setLogoIsHovered(false);
    }


    return (
        <header className='header'>
                <Link to="/" className='Logos'>
                    {logoIsHovered ? <img className='wink' src={wink} alt="logo" onMouseLeave={hoverHandler2}/>: 
                    <img className='noWink' src={noWink} alt="logo" onMouseEnter={hoverHandler} /> }
                </Link>
                <nav className='navbar'>
                    <ul className='list'>
                        <li>
                            <Link to="/" className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about-me" className='link'>About Me</Link>
                        </li>
                        <li>
                            <Link to="/projects" className='link'>Projects</Link>
                        </li>
                    </ul>
                </nav>
                {clicked ? <img className='borger' src={borger2} alt = "" onClick = {clickHandler}/> :
                        <img className='borger' src = {borger} alt = "" onClick = {clickHandler}/>}

        </header>
    );
}


export default Navbar;