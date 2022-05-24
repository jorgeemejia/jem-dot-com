import React from 'react';
import './Hero.css';
import { useState } from 'react';

function Hero(){
    const [animationEnded, setAnimationHasEnded] = useState(false);

    function animationHandler(){
        console.log('Animation Ended');
        setAnimationHasEnded(true);
    }

    return(
        // <div className='container'>
        //     {animationEnded ? <h1 className='h1'>Jorge Mejia</h1> :
        //     <img className='can' src={can} alt="can" onAnimationEnd={animationHandler}/>}
        // </div>
        <h1 className='h1'> Jorge Mejia</h1>
    )
}

export default Hero;