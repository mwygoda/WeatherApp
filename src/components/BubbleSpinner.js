import React, { Component } from 'react';
import Loading from 'react-loading';

class BubbleSpinner extends Component {
  render() {
    return(
      <Loading type='bubbles' color='#FF0FF' left="50%"/>
    );
  }
}

export default BubbleSpinner;
