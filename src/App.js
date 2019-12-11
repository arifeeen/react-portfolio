import React, { Component, Fragment } from 'react';
import Intro from './intro/Intro';
import Overall from './overall/Overall';
import Tech from './tech-stack/Tech';
import Experience from './experience/Experience';

class App extends Component {
  render() {
    return (
      
      <Fragment>


      <Intro></Intro>
      <Overall></Overall>
      <Tech></Tech>
      <Experience></Experience>
      </Fragment>

    );
  }
}

export default App;
