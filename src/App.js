import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import classes from './App.css';

class App extends Component {
  render() {
    console.log('props', this.props)
    return (
      
      <Fragment><div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLog} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to React</h1>
        </header>
        <p className={classes.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
      <p>
        My name is sameen</p></Fragment>

    );
  }
}

export default App;
