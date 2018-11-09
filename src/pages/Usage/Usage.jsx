import React from 'react';
import PropTypes from 'prop-types';
import styles from './Usage.scss';

import BasicLayout from 'components/BasicLayout';
import UserWordList from 'containers/UserWordList';

class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BasicLayout>
        <div className={styles.Usage}>
          <UserWordList />
        </div>
      </BasicLayout>
    );
  }
}


Usage.propTypes = {
};
Usage.defaultProps = {
};

export default Usage;