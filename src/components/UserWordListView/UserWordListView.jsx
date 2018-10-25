import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordListView.scss';

const UserWordView = ({ userWord }) => {
  return (
    <div>{userWord.id} - {userWord.content}</div>
  );
};

class UserWordListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props.userWords);
    return (
      <div className={styles.UserWordListView}>
        {this.props.userWords.map(userWord => <UserWordView userWord={userWord} />)}
      </div>
    );
  }
}


UserWordListView.propTypes = {
  userWords: PropTypes.arrayOf(PropTypes.array) 
};
UserWordListView.defaultProps = {
  userWords: []
};

export default UserWordListView;