import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";


function NavLinks(){

    return (
                    <ul className={classes.NavLinks}>
                        <li>
                            <Link to="/" className={classes.link}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about-me" className={classes.link}>About Me</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={classes.link}>Projects</Link>
                        </li>
                    </ul>
    )
}

export default NavLinks;