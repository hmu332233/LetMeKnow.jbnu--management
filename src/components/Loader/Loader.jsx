import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.scss';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.Loader}></div>
    );
  }
}


Loader.propTypes = {
};
Loader.defaultProps = {
};

export default Loader;