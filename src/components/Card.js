import React from 'react';
import './Card.css';
import { useState } from 'react';
import card from '../images/card.png';


export default function Card(props) {

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
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img className = 'card1' src={props.img1} alt=""/>
                </div>
            <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>We love that guy</p>
            </div>
            </div>
        </div>
    )
}

{/* <img className='card1' src={props.img1} alt=''/> */}