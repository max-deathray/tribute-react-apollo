import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import VibeList from './VibeList';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={VibeList} />
          <Route exact path="/create" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
