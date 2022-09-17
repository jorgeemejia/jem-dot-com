import React from 'react';
import classes from './About.module.css';
import yo from '../../images/yo.jpg';
import MeToo from '../../images/MeToo.png';

function About(){

    return(
        <div id="about-me" className={classes.about_section}>
        <h1 className={classes.about_header}>About Me</h1>
        <div className={classes.about_content}>
            <img className={classes.about_image} src={MeToo} alt=''/>
            <div className={classes.about_text}>
                <h1 className={classes.about_name}>Jorge Mejia</h1>
                {/* <hr className={classes.line}></hr> */}
                <p className={classes.about_summary}>
                I'm currently a Junior at CSUF majoring in Computer Science expecting
                to graduate in the Spring of 2023.
                </p>
                <p className={classes.about_summary}>
                Originally pursuing a Bachelor's in Business, I constantly found myself looking for 
                field in which I could really challenge myself. In the Fall of 2019 I took an introductory course
                to computer science and my passion was sparked. Ever since then I have been expanding my knowledge within the 'field' learning new technologies and applying them to projects.
                </p>
                <p className={classes.about_summary}>
                In the Fall of 2021 I was given the opportunity to join the board of ACM at CSUF and have been with them till this day.
                As a member I have been creating resources and hosting multiple workshops for peers in order to further
                expand their knowledge in the computer science field.
                </p>
                <p className={classes.about_summary}>
                In my spare time I enjoy playing Valve's 2007 multiplayer first-person shooter Team Fortress 2 and getting
                high.
                </p>
            </div>
        </div>
        </div>
    )
}

export default About;