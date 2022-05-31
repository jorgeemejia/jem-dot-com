import './Borger.css';
import { useState } from 'react';
import  burger  from "../images/borger.png";
import BorgerMenu from "./BorgerMenu";


export default function Hamburger(){

    const [clicked, setClick] = useState(false);

    function clickHandler(){
        setClick(true);
        console.log("borger click");
    }



    return(
        <div>
            <img src = {burger} alt = "" onClick = {clickHandler}/>
            {clicked && <BorgerMenu/>}
        </div>
        
    )

}
