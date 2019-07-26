import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

import { Input as ReactstrapInput } from 'reactstrap';

function Input({ nextInput, onKeyUp, ...props}) {
  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      nextInput && nextInput.current.focus();
      onKeyUp && onKeyUp(e);  
    }
  }
  return (
    <ReactstrapInput {...props} onKeyUp={handleKeyUp} />
  );
}

Input.propTypes = {
  nextInput: PropTypes.object,
  ...ReactstrapInput.propTypes,
};
Input.defaultProps = {
  ...ReactstrapInput.defaultProps,
};

export default Input;