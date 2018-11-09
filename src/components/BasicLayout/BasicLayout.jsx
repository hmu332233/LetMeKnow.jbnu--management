import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicLayout.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page">
        <div className="page-main">
          <Header />
          <div className="my-3 my-md-5">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

BasicLayout.propTypes = {};
BasicLayout.defaultProps = {};

export default BasicLayout;
