import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withToastify } from 'utils/component/toastify';

import UsagePage from 'pages/Usage';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <Router>
          <Route exact path="/" component={UsagePage} />
        </Router>
      </div>
    );
  }
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default withToastify(MainApp);
