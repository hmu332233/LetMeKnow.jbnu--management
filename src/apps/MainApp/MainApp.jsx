import React from "react";
import PropTypes from "prop-types";
import styles from "./MainApp.scss";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Site } from "tabler-react";

import { withToastify } from "utils/component/toastify";

import UsagePage from "pages/Usage";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <Site>
          <Site.Header 
            href={"/"}
            alt={"MANAGEMENT"}
          />
          <Router>
            <Route exact path="/" component={UsagePage} />
          </Router>
          <Site.Footer 
            copyright={'Copyright © 2018 minungHan. All rights reserved.'}
          />
        </Site>
      </div>
    );
  }
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default withToastify(MainApp);
