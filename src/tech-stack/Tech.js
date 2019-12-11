import React, {Fragment} from 'react';
import classes from './Tech.css';
const Tech = () => {
  return (
      <Fragment>
          <div className={classes.tech}>
            Tech Stack
          </div>

          <div className={classes.grid}>
            <p>
            Angular 2/4/5/6 
            </p>
            <p>
            Reactjs
            </p>
            <p>
            Nodejs
            </p>
            <p>
              Expressjs
            </p>
            <p>
              Mongodb
            </p>
            <p>
              HTML
            </p>
            <p>
              CSS
            </p>
            <p>
              Javascript
            </p>
            <p>
              Python
            </p>
          </div>

      </Fragment>
  )
}


export default Tech;