import React from 'react';
import './Project.css';
// import { useState } from 'react';
import card from '../images/card.png';

export default function Project(){
    return(
        <div className='project-section'>
            <h1 className='project-header'>
                Projects
            </h1>
            <div className='cards-container'>
                <img className='card' src={card} atl='card'/>
                <img className='card' src={card} atl='card'/>
                <img className='card' src={card} atl='card'/>
                <img className='card' src={card} atl='card'/>
            </div>
        </div>
    )
}