import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Loader(props) {
  return (
    <div 
      className={cx(
        { LoaderWrapper: true },
        { centered: props.centered }
      )
    }>
      <div className={styles.Loader}></div>
    </div>
  );
}


Loader.propTypes = {
  centered: PropTypes.bool
};
Loader.defaultProps = {
  centered: false
};

export default React.memo(Loader);