import React from 'react';
import classes from "./Navbar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from './MobileNavigation';


function Navbar(){

    return (
        <nav className={classes.Navbar}>
            <Navigation/>
            <MobileNavigation/>
        </nav>
    );
}


export default Navbar;