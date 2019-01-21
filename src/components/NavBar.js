import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../constants';

class NavBar extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <AppBar position="sticky">
        <Toolbar>
          <div>
            <Link to="/"> Tribute Vibes</Link> |{' '}
            <Link to="/create">submit a vibe</Link> |{' '}
            {authToken ? (
              <div
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  this.props.history.push('/');
                }}
              >
                logout
              </div>
            ) : (
              <Link to="/login">login</Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(NavBar);
