/* eslint-disable react/jsx-no-target-blank */
import React, {Fragment} from 'react';
import classes from './Projects.css';

const Project = () => {
    let style = {
        'font-weight': 'normal'
    }

    let linkStyle = {
        'text-decoration': 'none'
    }
    return (
        <Fragment>
            <div className={classes.projects}>
                Software Projects
            </div>
            <div className={classes.projectsInner}>
                Insurance Management applications (Angular)
                <ul style= {style}>
                <li>
                    Worked on designing and creating multiple front end applications in insurance domain  at Infosys.
                </li>
                
                </ul> 
            </div>
            <div className={classes.projectsInner}>
                Posts App (Ionic/Angular/Node/Mongodb)
                <ul style= {style}>
                <li>
                    Created a responsive app where user can create posts, add them into different groups and invite other users to see posts.
                </li>
                <li>
                    Complete Authentication system developed in nodejs uses jsonwebtoken for signing in.
                </li>
                <li>
                    Data is persisted in a mongo database, Frontend is deployed in firebase and backend in heroku.
                </li> 
                <li>
                 App is available at <a href="https://ion-dummy.firebaseapp.com" style = {linkStyle} target="_blank">https://ion-dummy.firebaseapp.com  </a>  
                </li>   
                </ul> 
            </div>
            <div className={classes.projectsInner}>
                Polling App (Ionic/Angular/Node/Mongodb)
                <ul style={style}>
                    <li>
                        Created a responsive app where user can create polls and share them with other users.
                    </li>
                    {/* <li>
                        App is available at <a href="https://ion-dummy.firebaseapp.com" style = {linkStyle} target="_blank">https://ion-dummy.firebaseapp.com  </a>
                    </li> */}
                </ul>
            </div>
            <div className={classes.projectsInner}>
                Expenses Management App(Ionic/Angular)
                <ul style={style}>
                    <li>
                        Created a responsive expenses management app where user can add day to day expenses and sort information based on dates provided.
                    </li>
                    <li>
                        Uses Browsers inbuild storage for storing data.
                    </li>
                    <li>
                    App is available at <a href="https://expenses-mgmt.firebaseapp.com" style = {linkStyle} target="_blank">https://expenses-mgmt.firebaseapp.com </a>
                    </li>
                </ul>
            </div>
            <div className={classes.projectsInner}>
                    Portfolio App (React)
                    <ul style={style}>
                        <li>
                            Created a responsive portfolio app using Reactjs.
                        </li>
                        <li>
                            App can be found at <a href="https://react-portfolio-609f3.firebaseapp.com/" style = {linkStyle} target="_blank">https://react-portfolio-609f3.firebaseapp.com/ </a>
                        </li>
                    </ul>
            </div>
        </Fragment>
    )
}

export default Project;