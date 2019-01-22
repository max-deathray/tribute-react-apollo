import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Add from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
              <div>
                <Link to="/">
                  <Button>
                    {' '}
                    <Typography variant="h3">Vibe Tribe </Typography>
                  </Button>
                </Link>
                {'   '}
              </div>
              {/* submit button is only visible when you are logged in */}
              {authToken && (
                <div>
                  <Link to="/create">
                    <Button>
                      <Typography>
                        <Add fontSize="large" />
                      </Typography>
                    </Button>
                  </Link>{' '}
                </div>
              )}
              {/* login button changes to logout when you are logged in */}
            </div>
            <div>
              {' '}
              {authToken ? (
                <Button>
                  <div
                    onClick={() => {
                      localStorage.removeItem(AUTH_TOKEN);
                      this.props.history.push('/');
                    }}
                  >
                    logout
                  </div>
                </Button>
              ) : (
                <Link to="/login">
                  <Button>login</Button>
                </Link>
              )}
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(NavBar);
