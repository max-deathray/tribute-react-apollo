import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <div>
            <Link to="/"> Tribute Vibes</Link> |{' '}
            <Link to="/create">submit a vibe</Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(NavBar);
