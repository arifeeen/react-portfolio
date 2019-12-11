/* eslint-disable react/jsx-no-target-blank */
import React,{Fragment} from 'react';
import classes from './Intro.css';
const Intro = () => {
    let styles = {
        color: 'lightgray',
        textDecoration: 'none'
    }
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
                    <span>Phone: </span>
                    <span className={classes.spanData}>6301899624</span>
                </p>
                <p>
                    <span>Email: </span>
                    <span className={classes.spanData}>sam.arif1113@gmail.com</span>
                </p>
                <p>
                    <span>Git: </span>
                    <span className={classes.spanData}><a style={styles} href="https://www.github.com/arifeeen" target="_blank">www.github.com/arifeeen</a></span>
                </p>
                <p>
                    <span>Hackerrank: </span>
                    <span className={classes.spanData}><a style={styles} href="https://www.hackerrank.com/arifeeen" target="_blank">www.hackerrank.com/arifeeen</a></span>
                </p>

            </div>
        </Fragment>
    )
}

export default Intro;