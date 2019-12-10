import React,{Fragment} from 'react';
import classes from './Intro.css';
const Intro = () => {
    return (
        <Fragment>
            <div className={classes.intro}>
                <p className={classes.nameSize}>
                    Sameen Ul Arifeen
                </p>
                <p className={classes.textSize}>
                    Web Developer
                </p>

                <p>
                    <span>Phone</span>
                    <span className={classes.spanData}>6301899624</span>
                </p>
                <p>
                    <span>Email</span>
                    <span className={classes.spanData}>sam.arif1113@gmail.com</span>
                </p>

            </div>
        </Fragment>
    )
}

export default Intro;