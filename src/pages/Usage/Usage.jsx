import React from 'react';
import PropTypes from 'prop-types';
import styles from './Usage.scss';

import UserWordList from 'containers/UserWordList';

import { Page } from "tabler-react";

class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Page.Content className={styles.Usage}>
        <UserWordList />
      </Page.Content>
    );
  }
}


Usage.propTypes = {
};
Usage.defaultProps = {
};

export default Usage;