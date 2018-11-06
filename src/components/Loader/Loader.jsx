import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div 
        className={cx(
          { LoaderWrapper: true },
          { centered: this.props.centered }
        )
      }>
        <div className={styles.Loader}></div>
      </div>
    );
  }
}


Loader.propTypes = {
  centered: PropTypes.bool
};
Loader.defaultProps = {
  centered: false
};

export default Loader;