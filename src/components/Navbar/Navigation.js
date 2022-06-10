import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Pkat from "./Pkat"


function RegularNav(){



    return (
        <nav className={classes.Navigation}>
            <Pkat/>
            <a href ="/" className={classes.link}>Home</a>
            <a href ="/#about-me" className={classes.link}>About Me</a>
            <a href ="/#projects" className={classes.link}>Projects</a>
            <Pkat/>
        </nav>
    );
}


export default RegularNav;