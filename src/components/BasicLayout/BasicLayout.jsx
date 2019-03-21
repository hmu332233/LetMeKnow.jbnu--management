import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicLayout.scss';

import BasicHeader from 'containers/BasicHeader';
import Footer from 'components/Footer';

import ScrollTopButton from 'components/ScrollTopButton';

function BasicLayout(props) {
  return (
    <div className="page">
      <div className="page-main">
        <BasicHeader />
        <div className="my-3 my-md-5">
          <div className="container">{props.children}</div>
          <ScrollTopButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}

BasicLayout.propTypes = {};
BasicLayout.defaultProps = {};

export default React.memo(BasicLayout);
