import NavLinks from './NavLinks';
import classes from "./Navbar.module.css";
import  borger  from "../../images/borger.png";
import borger2 from "../../images/borger2.png";
import { useState } from 'react';
import Pkat from "./Pkat"



export default function MobileNavigation(){

    const [clicked, setClick] = useState(false);

    function clickHandler(){
        setClick(!clicked);
        console.log("borger click");
    }


    return (
        <nav className={classes.MobileNavigation}>
            <Pkat/>

            {clicked && <NavLinks/>}

            {clicked ? <img className={classes.borger} src={borger2} alt = "" onClick = {clickHandler}/> :
                        <img className={classes.borger} src = {borger} alt = "" onClick = {clickHandler}/>}
        </nav>
        

    );

}