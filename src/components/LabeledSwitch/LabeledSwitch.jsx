import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabeledSwitch.scss';

import classnames from 'classnames';

import Switch from 'components/Switch';

function LabeledSwitch(props) {
  return (
    <div className={classnames(styles.LabeledSwitch, props.className)}>
      <span className={styles.LabeledSwitch__label}>
        {props.label}
      </span>
      <Switch
        value={props.value}
        toggle={props.toggle}
      />
    </div>
  );
}

LabeledSwitch.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  toggle: PropTypes.func,
};
LabeledSwitch.defaultProps = {
  className: '',
  label: '',
  value: false,
  toggle: v => v
};

export default LabeledSwitch;