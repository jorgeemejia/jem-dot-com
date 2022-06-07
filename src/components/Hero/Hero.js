import React from 'react';
import classes from './Hero.module.css';
import { useState } from 'react';
import yo from '../../images/yo.jpg';

function Hero(){

    return(
        <div>
        <h1 className={classes.title}>About</h1>
        <div className={classes.about_container}>
            <img className={classes.pic} src={yo} alt=''/>
            <div className={classes.text}>
                <h1 className={classes.h}>Jorge Mejia</h1>
                {/* <hr className={classes.line}></hr> */}
                <p className={classes.summ}>
                    Hello my name is Jorge. This is an about me section
                    I'm going to put a lot of stuff here. Possible like 
                    one or two paragraphs, not sure atm. It'll be a bunch
                    of boring stuff like what I like to do in my spare time.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Hero;