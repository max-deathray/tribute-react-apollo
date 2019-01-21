import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class NavBar extends Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <div>Tribute Vibes</div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
