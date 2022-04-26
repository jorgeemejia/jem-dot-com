import React from 'react';
import './Project.css';
// import { useState } from 'react';
import card from '../images/card.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import Card from './Card';

export default function Project(){
    return(
        <div className='project-section'>
            <h1 className='project-header'>
                Projects
            </h1>
            <div className='cards-container'>
                <Card img1={card} img2={card2} />
                {/* Card component accepts two images. Card component flips them */}
                {/* https://stackoverflow.com/questions/52999377/react-passing-import-name-as-prop-and-adding-to-image-src */}
                <img className='card' src={card} alt='card'/>
                <img className='card' src={card2} alt='card2'/>
                <img className='card' src={card3} alt='card3'/>
                <img className='card' src={card4} alt='card4'/>
            </div>
        </div>
    )
}