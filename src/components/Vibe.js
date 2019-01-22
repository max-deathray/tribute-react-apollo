import React, { Component } from 'react';
import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { AUTH_TOKEN } from '../constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const HEART_MUTATION = gql`
  mutation HeartMutation($vibeId: ID!) {
    heart(vibeId: $vibeId) {
      id
      vibe {
        hearts {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

class Vibe extends Component {
  state = {
    hearted: false,
  };
  render() {
    // const hearted = this.state.hearted;
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="single-vibe">
        <div>
          <img src={this.props.vibe.img} alt={this.props.vibe.description} />
        </div>
        <div className="panel">
          <div className="vibe-caption">{this.props.vibe.description}</div>
          {authToken && (
            <div className="locket">
              <div className="heart-count">{this.props.vibe.hearts.length}</div>
              <div className="heart-icon">
                <Mutation
                  mutation={HEART_MUTATION}
                  variables={{ vibeId: this.props.vibe.id }}
                  update={(store, { data: { heart } }) =>
                    this.props.updateStoreAfterHeart(
                      store,
                      heart,
                      this.props.vibe.id
                    )
                  }
                >
                  {heartMutation => (
                    <Button onClick={heartMutation}>
                      <Favorite />
                    </Button>
                  )}
                </Mutation>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  _heartForVibe() {
    console.log('clicked the heart!');
  }
}

export default Vibe;
