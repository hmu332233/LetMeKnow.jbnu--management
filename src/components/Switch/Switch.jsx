import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Switch.scss';

function Switch(props) {
  return (
    <label className="custom-switch">
      <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" checked={props.value} />
      <span className="custom-switch-indicator" onClick={props.toggle}></span>
    </label>
  );
}

Switch.propTypes = {
  value: PropTypes.bool,
  toggle: PropTypes.func,
};
Switch.defaultProps = {
  value: false,
  toggle: v => v
};

export default Switch;