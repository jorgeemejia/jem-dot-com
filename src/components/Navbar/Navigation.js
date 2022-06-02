import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Pkat from "./Pkat"


function RegularNav(){



    return (
        <nav className={classes.Navigation}>
            <Pkat/>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/about-me" className={classes.link}>About Me</Link>
            <Link to="/projects" className={classes.link}>Projects</Link>
            <Pkat/>
        </nav>
    );
}


export default RegularNav;