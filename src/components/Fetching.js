import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import NProgress from 'nprogress';

export class Fetching extends Component {
  componentDidMount() {
    NProgress.start();
  }

  componentWillUnmount() {
    NProgress.done();
  }

  render() {
    return (
      <div className="fetching">
        <Loader type="Hearts" />
      </div>
    );
  }
}

export default Fetching;
