import React, {Fragment} from 'react';
import classes from './education.css';


const   Education = () => {
 return (
     <Fragment>
         <div className={classes.education}>
                Education
        </div>
        <div className={classes.grid}>
            <div>
                05-2012 - 05-2016
            </div>
            <div>
                <div><strong>University College of Engineering, Osmania University.</strong></div>
                <div>
                   B.E in Mechanical Engineering. First class with distinction.
                </div>
            </div>
            <div>
                05-2010 - 05-2012
            </div>
            <div>
                <div><strong>Sri Chaitanya Junior Kalasala.</strong></div>
                <div>
                    M.P.C (95.3%)
                </div>
            </div>
            <div>
                05-2000 - 05-2010
            </div>
            <div>
                <div><strong>Madina Public School.</strong></div>
                <div>
                    State Syllabus.
                </div>
            </div>
            
        </div>
        
     </Fragment>
 )
}

export default Education;