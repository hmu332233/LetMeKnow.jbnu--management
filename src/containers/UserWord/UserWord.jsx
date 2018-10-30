import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWord.scss';

import axios from 'axios';

import utils from 'utils/js';

import UserWordView from 'components/UserWordView';

class UserWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
    this.searchByContent = this.searchByContent.bind(this);
  }

  searchByContent(content) {
    axios.get(`/api/v1/user_words?content=${encodeURIComponent(content)}`).then(res => {
      if (res.data.success) {
        console.log(res.data);
      }
    })
  }

  handleClick() {
    const { data } = this.props;
    this.searchByContent(data.content);
  }

  render() {

    const views = utils.convertObjectToArrayWithKeyValue(this.props.data);
  
    return (
      <div className={styles.UserWordView}>
        <UserWordView
          views={views} 
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}


UserWord.propTypes = {
  data: PropTypes.object
};
UserWord.defaultProps = {
};

export default UserWord;