import React, { Component, Fragment } from 'react';
import Intro from './intro/Intro';
import Overall from './overall/Overall';
import Tech from './tech-stack/Tech';

class App extends Component {
  render() {
    return (
      
      <Fragment>


      <Intro></Intro>
      <Overall></Overall>
      <Tech></Tech>
      </Fragment>

    );
  }
}

export default App;
