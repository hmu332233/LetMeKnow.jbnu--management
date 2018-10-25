import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordList.scss';

import axios from 'axios';

import UserWordListView from 'components/UserWordListView';

class UserWordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWords: []
    };
    this.getUserWords = this.getUserWords.bind(this);
  }

  getUserWords() {
    axios.get('/api/user_words').then(res => {
      if (res.data.success) {
        this.setState({ userWords: res.data.data });
      }
    });
  }

  render() {
    this.getUserWords();
    console.log(this.state.userWords)
    return (
      <UserWordListView
        userWords={this.state.userWords}
      />
    );
  }
}


UserWordList.propTypes = {
};
UserWordList.defaultProps = {
};

export default UserWordList;