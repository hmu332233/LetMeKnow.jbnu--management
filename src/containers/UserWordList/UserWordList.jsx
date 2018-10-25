import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordList.scss';

class UserWordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getUserWords() {
    // const a = fetch('/api/user_words');
    console.log(a);
  }

  render() {
    return (
      <div className={styles.UserWordList}></div>
    );
  }
}


UserWordList.propTypes = {
};
UserWordList.defaultProps = {
};

export default UserWordList;