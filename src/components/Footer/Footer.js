import classes from "./Footer.module.css";
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import resume from '../../images/resume.png';

export default function Footer () {

    return(
    <div className={classes.footer_section} id='contact-me'>
        <h1 className={classes.footer_header}> Contact Me </h1>
        <ul className={classes.footer_links_list}>
            <li className={classes.footer_link}>
                <a href = "https://www.linkedin.com/in/jorgeemejia">
                    <img  className = {classes.media} src={linkedin} alt=""/>
                </a>
            </li>
            <li className={classes.footer_link}>
                <a href = "https://drive.google.com/file/d/16_WNmSvBxLfrMHgBQaR0urywaMCX7tRb/view?usp=sharing">
                    <img className = {classes.media} src={resume} alt=""/>
                </a>
            </li>
            <li className={classes.footer_link}>
                <a href = "https://github.com/jorgeemejia">
                    <img className = {classes.media} src={github} alt=""/>
                </a>
            </li>
        </ul>
    </div>
    );
}