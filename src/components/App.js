import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import VibeList from './VibeList';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <VibeList />
      </Fragment>
    );
  }
}

export default App;
