// import React from 'react';
import './Card.css';
// import { useState } from 'react';
// import card from '../images/card.png';


export default function Card(props) {

    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className = 'card1' src={props.img1} alt=""/>
                </div>
                <div className="flip-card-back">
                    <img className = 'card1' src={props.img2} alt=""/>
                </div>
            </div>
        </div>
    )
}
