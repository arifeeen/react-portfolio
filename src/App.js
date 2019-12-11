import React, { Component, Fragment } from 'react';
import Intro from './intro/Intro';
import Overall from './overall/Overall';
import Tech from './tech-stack/Tech';
import Experience from './experience/Experience';
import Project from './projects/Projects';
import Education from './education/Education';

class App extends Component {
  render() {
    return (
      
      <Fragment>


      <Intro></Intro>
      <Overall></Overall>
      <Experience></Experience>
      <Education></Education>
      <Tech></Tech>
      <Project></Project>
      </Fragment>

    );
  }
}

export default App;
