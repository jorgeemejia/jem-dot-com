import React from 'react';
import './Project.css';
// import { useState } from 'react';
import discord_card from '../../images/discord_card.png';
import discord_card2 from '../../images/discord_card2.png';
import sql_card from '../../images/sql_card.png';
import sql_card2 from '../../images/sql_card2.png';
import shark_card from '../../images/shark_card.png';
import shark_card2 from '../../images/shark_card2.png';
import web_card from '../../images/web_card.png';
import web_card2 from '../../images/web_card2.png';
import Card from './Card';

export default function Project(){
    return(
        <div className='project-section' id="projects">
            <h1 className='project-header'>
                Projects
            </h1>
            <div className='cards-container'>
                <a className='card' href='https://github.com/jorgeemejia/TF2-Quotes-Bot'>
                    <Card img1={discord_card} img2={discord_card2}/>
                </a>
                <a className='card' href='https://github.com/jorgeemejia/Pharmasoodicals'>
                    <Card img1={sql_card} img2={sql_card2}/>
                </a>
                <a classname='card' href='https://github.com/jorgeemejia/The-Sharks-Lair'>
                    <Card img1={shark_card} img2={shark_card2}/>
                </a>
                <a classname='card' href='https://github.com/jorgeemejia/TF2-Quotes-Bot'>
                    <Card img1={web_card} img2={web_card2}/>
                </a>
            </div>
        </div>
    )
}

