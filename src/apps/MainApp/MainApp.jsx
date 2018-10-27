import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import { Alert } from 'reactstrap';

import { withToastify } from 'utils/component/toastify';

import UserWordList from 'containers/UserWordList';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <div className="container">
          <UserWordList />
        </div>
      </div>
    );
  }
}


MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default withToastify(MainApp);