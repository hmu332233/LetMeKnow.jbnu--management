import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordListView.scss';

import UserWord from 'containers/UserWord';

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
        {this.props.userWords.map(userWord => <UserWord content={userWord.content} count={userWord.count} />)}
      </div>
    );
  }
}


UserWordListView.propTypes = {
  userWords: PropTypes.arrayOf(PropTypes.objectOf({
    content: PropTypes.string,
    count: PropTypes.number
  })) 
};
UserWordListView.defaultProps = {
  userWords: []
};

export default UserWordListView;