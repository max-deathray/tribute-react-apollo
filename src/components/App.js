import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import VibeList from './VibeList';
import NavBar from './NavBar';
import CreateVibe from './CreateVibe';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={VibeList} />
          <Route exact path="/create" component={CreateVibe} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
