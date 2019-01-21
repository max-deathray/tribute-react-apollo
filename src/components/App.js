import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import VibeList from './VibeList';
import NavBar from './NavBar';
import CreateVibe from './CreateVibe';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <NavBar />
        <VibeList /> */}
        <CreateVibe />
      </Fragment>
    );
  }
}

export default App;
