import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordListView.scss';

import { ListGroup } from 'reactstrap';

import UserWord from 'containers/UserWord';

class UserWordListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ListGroup className={styles.UserWordListView} flush>
        {this.props.userWords.map(userWord => <UserWord data={userWord} />)}
      </ListGroup>
    );
  }
}


UserWordListView.propTypes = {
  userWords: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    count: PropTypes.number,
    lastUserId: PropTypes.string,
    lastTimestamp: PropTypes.number
  })) 
};
UserWordListView.defaultProps = {
  userWords: []
};

export default UserWordListView;