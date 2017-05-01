import React from 'react';
import Loading from 'react-loading';

const Spinner = (props) => {
    return(
      <Loading type={props.type} color={props.color} left={props.left} />
    );
  }

export default Spinner;
