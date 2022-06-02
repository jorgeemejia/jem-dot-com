import NavLinks from './NavLinks';
import classes from "./Navbar.module.css";
import  borger  from "../../images/borger.png";
import borger2 from "../../images/borger2.png";
import wink from '../../images/pkat.png';
import noWink from '../../images/pkat2.png';
import { useState } from 'react';
import { Link } from "react-router-dom";



export default function MobileNavigation(){

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
        <nav className={classes.MobileNavigation}>
            <Link to="/" className={classes.logos}>
                    {logoIsHovered ? <img className={classes.wink} src={wink} alt="logo" onMouseLeave={hoverHandler2}/>: 
                    <img className={classes.nowink} src={noWink} alt="logo" onMouseEnter={hoverHandler} /> }
                </Link>

            {clicked && <NavLinks/>}

            {clicked ? <img className={classes.borger} src={borger2} alt = "" onClick = {clickHandler}/> :
                        <img className={classes.borger} src = {borger} alt = "" onClick = {clickHandler}/>}
        </nav>
        

    );

}