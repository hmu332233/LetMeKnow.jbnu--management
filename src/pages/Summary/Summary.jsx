import React from 'react';
import PropTypes from 'prop-types';
import styles from './Summary.scss';

import BasicLayout from 'components/BasicLayout';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BasicLayout>
        <div className={styles.Summary}>summary page!</div>
      </BasicLayout>
    );
  }
}

Summary.propTypes = {};
Summary.defaultProps = {};

export default Summary;
