import React, { Component } from 'react';

class Vibe extends Component {
  render() {
    return (
      <div className="single-vibe">
        <div>
          <img src={this.props.vibe.img} alt={this.props.vibe.description} />
        </div>
        <div className="vibe-caption">{this.props.vibe.description}</div>
      </div>
    );
  }
}

export default Vibe;
