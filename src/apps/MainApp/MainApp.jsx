import React from "react";
import PropTypes from "prop-types";
import styles from "./MainApp.scss";

import { Site, Page } from "tabler-react";

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
        <Site.Wrapper
          headerProps={{
            href: "/",
            alt: "MANAGEMENT",
          }}
          footerProps={{
            copyright: (
              <div>
                Copyright © 2018 minungHan. All rights reserved.
              </div>
            )
          }}
        >
          <UsagePage />
        </Site.Wrapper>
      </div>
    );
  }
}

MainApp.propTypes = {};
MainApp.defaultProps = {};

export default withToastify(MainApp);
