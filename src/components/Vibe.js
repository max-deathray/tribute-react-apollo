import React, { Component } from 'react';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';

class Vibe extends Component {
  render() {
    return (
      <div className="single-vibe">
        <div>
          <img src={this.props.vibe.img} alt={this.props.vibe.description} />
        </div>
        <div className="panel">
          <div className="vibe-caption">{this.props.vibe.description}</div>
          <div className="locket">
            <Button>
              <FavoriteBorder />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Vibe;
