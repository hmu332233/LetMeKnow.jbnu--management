import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordList.scss';

import axios from 'axios';

import { ToastMessage, toast } from 'utils/component/toastify';

import SearchBar from 'components/SearchBar';
import LoaderBox from 'components/LoaderBox';
import UserWordTable from 'containers/UserWordTable';

class UserWordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
        this.setState({ isLoading: false, userWords: res.data.data });
        toast(ToastMessage.FETCH_SUCCESS);
      } else {
        toast(ToastMessage.FETCH_FAIL);
      }
    });
  }

  render() {
    return (
      <LoaderBox isLoading={this.state.isLoading} centered maxHeight maxWidth>
        <SearchBar
          pressEnterHandler={console.log}
        />
        <UserWordTable userWords={this.state.userWords} />
      </LoaderBox>
    );
  }
}

UserWordList.propTypes = {};
UserWordList.defaultProps = {};

export default UserWordList;
