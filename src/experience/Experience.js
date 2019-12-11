import React, { Fragment } from 'react';
import classes from './experience.css';

const Experience = () => {
    return (
        <Fragment>
            <div className={classes.experience}>
                Experience
            </div>
            <div className={classes.grid}>
                <div>
                    10-2017 - 09-2019
                </div>

                <div>
                    <div className={classes.title}>
                        Specialist Programmer
                    </div>
                    <div>
                        Infosys
                    </div>
                    <div>
                        Responsibilities:
                    </div>
                    <div>
                        <ul>
                            <li>
                                Creating responsive websites using Angular,Ionic, React, HTML, CSS, Javascript.
                          </li>
                            <li>
                                Creating REST api's using Expressjs.
                          </li>
                            <li>
                                Using Rxjs for reactive programming.
                          </li>
                            <li>
                                Designing and implementing framework related components that can be reused in the application.
                          </li>
                            <li>
                                Creating webpages by gathering and analyzing wireframes.
                          </li>
                            <li>
                                Working with Devops in deploying the application.
                          </li>
                            <li>
                                Unit testing using karma and jasmine.
                          </li>
                        </ul>
                    </div>
                    <div>
                        Achievements:
                    </div>
                    <div>
                        <ul>
                            <li>
                                Designed and implemented a role based security framework.
                            </li>
                            <li>
                                Externalized environment variables so that the properties can be injected into the Angular application at runtime thereby reducing the effort of the devops team to repeat the build process for using multiple environment files.
                            </li>
                            <li>
                                Implemented an efficient localization approach in the application.
                            </li>
                        </ul>
                    </div>

                </div>
                <div>
                    06-2016 - 09-2017
                </div>
                <div>
                    <div className={classes.title}>
                        Systems Engineer
                    </div>
                    <div>
                        Infosys
                    </div>
                    <div>
                        Responsibilities:
                    </div>
                    <div>
                        <ul>
                            <li>
                                Creating responsive websites using Angular, Typescript , HTML, CSS.
                            </li>
                            <li>
                                Unit testing using karma and jasmine.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Experience;