import React from 'react';
import { Link } from "react-router-dom";
import wink from '../../images/pkat.png';
import { useState } from 'react';
import noWink from '../../images/pkat2.png';
import NavLinks from './NavLinks';
import classes from "./Navbar.module.css";


function RegularNav(){


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
        <header className={classes.Navigation}>
                <Link to="/" className={classes.logos}>
                    {logoIsHovered ? <img className={classes.wink} src={wink} alt="logo" onMouseLeave={hoverHandler2}/>: 
                    <img className={classes.nowink} src={noWink} alt="logo" onMouseEnter={hoverHandler} /> }
                </Link>

                <NavLinks/>

                <Link to="/" className={classes.logos}>
                    {logoIsHovered ? <img className={classes.wink} src={wink} alt="logo" onMouseLeave={hoverHandler2}/>: 
                    <img className={classes.nowink} src={noWink} alt="logo" onMouseEnter={hoverHandler} /> }
                </Link>
                {/* {clicked ? <img className='borger' src={borger2} alt = "" onClick = {clickHandler}/> :
                        <img className='borger' src = {borger} alt = "" onClick = {clickHandler}/>} */}
        </header>
    );
}


export default RegularNav;