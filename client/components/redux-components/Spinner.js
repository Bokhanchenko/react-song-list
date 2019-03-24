import React, { Component } from 'react';

class Spinner extends Component {
  render () {
    const { isFetching } = this.props;

    return isFetching
      ? <div>Loading</div>
      : null;
  }
}

export default Spinner;