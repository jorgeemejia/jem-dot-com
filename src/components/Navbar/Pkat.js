import wink from '../../images/pkat.png';
import noWink from '../../images/pkat2.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Pkat()
{
    const [logoIsHovered, setLogoIsHovered] = useState(false);


    function hoverHandler(){
        console.log('Hovered!');
        setLogoIsHovered(true);
    }
    function hoverHandler2(){
        console.log('Un Hovered');
        setLogoIsHovered(false);
    }

    return(
        <Link to="/" className={classes.logos}>
        {logoIsHovered ? <img className={classes.wink} src={wink} alt="logo" onMouseLeave={hoverHandler2}/>: 
        <img className={classes.nowink} src={noWink} alt="logo" onMouseEnter={hoverHandler} /> }
        </Link>
    )

}