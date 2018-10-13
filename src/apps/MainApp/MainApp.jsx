import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import { Alert } from 'reactstrap';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <div>
          hello, client!
        </div>
      </div>
    );
  }
}


MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;