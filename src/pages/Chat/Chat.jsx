import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chat.scss';

import BasicLayout from 'components/BasicLayout';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BasicLayout>
        <div className={styles.Chat}>
        
        </div>
      </BasicLayout>
    );
  }
}

Chat.propTypes = {};
Chat.defaultProps = {};

export default Chat;
