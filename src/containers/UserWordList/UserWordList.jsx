import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordList.scss';

import axios from 'axios';

import { ToastMessage, toast, withToastify } from 'utils/component/toastify';

import UserWordListView from 'components/UserWordListView';

class UserWordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWords: []
    };
    this.fetchUserWords = this.fetchUserWords.bind(this);
  }

  componentDidMount() {
    this.fetchUserWords();
  }

  fetchUserWords() {
    axios.get('/api/v1/user_words/date/group').then(res => {
      if (res.data.success) {
        this.setState({ userWords: res.data.data });
        toast(ToastMessage.FETCH_SUCCESS);
      } else {
        toast(ToastMessage.FETCH_FAIL);
      }
    });
  }

  render() {
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