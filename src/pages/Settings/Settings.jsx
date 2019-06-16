import React from 'react';
import PropTypes from 'prop-types';
import styles from './Settings.scss';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.Settings}>
        셋팅 페이지
      </div>
    );
  }
}

Settings.propTypes = {
};
Settings.defaultProps = {
};

export default Settings;