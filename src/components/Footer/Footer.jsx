import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
              Copyright © 2018 <a href=".">minung.han</a>. Theme by Tabler All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
