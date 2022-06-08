import classes from "./Footer.module.css";



export default function Footer () {

    return(
    <div className={classes.container}>
        <ul className={classes.list}>
            <li className={classes.item}>
                Made by JEM
            </li>
            {/* <li className={classes.item}>
                Hello
            </li>
            <li className={classes.item}>
                Goodbye
            </li> */}
        </ul>
    </div>
    );
}