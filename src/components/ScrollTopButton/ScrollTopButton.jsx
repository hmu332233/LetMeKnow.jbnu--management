import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollTopButton.scss';

import classnames from 'classnames';
import { Button } from 'reactstrap';

import Utils from 'utils/js';

function scrollToTop() {
  const documentBody = document.scrollingElement || document.documentElement || document.body;
	Utils.smoothScroll(documentBody, 0, 300);
}

function ScrollTopButton(props) {
  return (
    <Button className={classnames(styles.ScrollTopButton, props.className)} color="secondary" onClick={scrollToTop}>
      <i className="fe fe-arrow-up"></i>
    </Button>
  );
}

ScrollTopButton.propTypes = {
  className: PropTypes.string,
};
ScrollTopButton.defaultProps = {
  className: ''
};

export default ScrollTopButton;