import React, { Component } from 'react';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { AUTH_TOKEN } from '../constants';

class Vibe extends Component {
  state = {
    hearted: false,
  };
  render() {
    const hearted = this.state.hearted;
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="single-vibe">
        <div>
          <img src={this.props.vibe.img} alt={this.props.vibe.description} />
        </div>
        <div className="panel">
          <div className="vibe-caption">{this.props.vibe.description}</div>
          <div className="heart-count">
            {/* {this.props.vibe.hearts.length} hearts */}
            hearts count
          </div>
          {authToken && (
            <div className="locket">
              <Button
                onClick={() => {
                  this.setState({ hearted: !hearted });
                }}
              >
                {hearted === false ? <FavoriteBorder /> : <Favorite />}
              </Button>
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
