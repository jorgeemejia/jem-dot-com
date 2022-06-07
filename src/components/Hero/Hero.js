import React from 'react';
import classes from './Hero.module.css';
import { useState } from 'react';
import yo from '../../images/yo.jpg';

function Hero(){

    return(

        <div className={classes.about_container}>
            <img className={classes.pic} src={yo} alt=''/>
            <p className={classes.text}>Hello my name is Jorge. This is an about me section
                I'm going to put a lot of stuff here. Possible like 
                one or two paragraphs, not sure atm. It'll be a bunch
                of boring stuff like what I like to do in my spare time.
            </p>
        </div>
    )
}

export default Hero;