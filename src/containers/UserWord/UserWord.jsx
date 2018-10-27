import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWord.scss';

import axios from 'axios';

class UserWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
    this.searchByContent = this.searchByContent.bind(this);
  }

  searchByContent(content) {
    axios.get(`/api/v1/user_words?content=${content}`).then(res => {
      if (res.data.success) {
        console.log(res.data);
      }
    })
  }

  handleClick() {
    const { content } = this.props;
    this.searchByContent(content);
  }

  render() {
    const contentElement = this.props.content;
    const countElement = this.props.count;

    const userWordElements = [
      contentElement,
      countElement
    ]

    return (
      <div className={styles.UserWordView} onClick={this.handleClick}>
        {userWordElements}
      </div>
    );
  }
}


UserWord.propTypes = {
  content: PropTypes.string,
  count: PropTypes.number
};
UserWord.defaultProps = {
};

export default UserWord;