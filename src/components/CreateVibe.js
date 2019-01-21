import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import NProgress from 'nprogress';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $img: String!) {
    post(description: $description, img: $img) {
      id
      img
      description
    }
  }
`;

class CreateVibe extends Component {
  state = {
    img: '',
    description: '',
  };

  render() {
    const { classes } = this.props;
    const { img, description } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add a Vibe to the Tribe
          </Typography>
          <form className={classes.form}>
            <div>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="Description">Describe the Vibe</InputLabel>
                <Input
                  autoComplete="description"
                  autoFocus
                  value={description}
                  onChange={e => this.setState({ description: e.target.value })}
                  type="text"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="image">Image URL</InputLabel>
                <Input
                  autoComplete="image"
                  // autoFocus
                  value={img}
                  onChange={e => this.setState({ img: e.target.value })}
                  type="text"
                />
              </FormControl>
            </div>
            <Mutation
              mutation={POST_MUTATION}
              variables={{ description, img }}
              onCompleted={() => this.props.history.push('/')}
            >
              {postMutation => (
                <Button
                  onClick={postMutation}
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Submit
                </Button>
              )}
            </Mutation>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(CreateVibe);
