import "./About.css"
import wink from '../../images/pkat.png';
import { useState } from 'react';

export default function About (){
    const [animationEnded, setAnimationHasEnded] = useState(false);

    function animationHandler(){
        console.log('Animation Ended');
        setAnimationHasEnded(true);
    }

    const [animationEnded2, setAnimationHasEnded2] = useState(false);

    function animationHandler2(){
        console.log('Animation Ended');
        setAnimationHasEnded2(true);
    }


    return (
        <div className="about-section">
            <h1 className="about-header">
                
            </h1>
            <div className="box">
                <div className="face-side">
                    <img className='pkat' src={wink} alt='pkat'/>
                </div>
                <div className="text-side">
                    <p className="text" onAnimationEnd={animationHandler}>
                    Hello my name is Jorge Mejia. This is
                    </p>

                    {animationEnded ? <p className="text" onAnimationEnd={animationHandler2}>
                    a paragraph about me. I hope it isn't too long.
                    </p> : null}

                    {animationEnded2 ? <p className="text">
                    here is some more text that's just filler
                    </p> : null}
                    
                </div>
            </div>
        </div>
    )
}