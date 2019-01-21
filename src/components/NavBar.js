import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../constants';

class NavBar extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    console.log('authToken', authToken);
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {' '}
            <div className="header">
              <Link to="/"> Tribute Vibes</Link> |{' '}
              {/* submit button is only visible when you are logged in */}
              {authToken && (
                <div>
                  <Link to="/create">submit a vibe</Link>|{' '}
                </div>
              )}
              {/* login button changes to logout when you are logged in */}
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
            <div>Other Div</div>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(NavBar);
