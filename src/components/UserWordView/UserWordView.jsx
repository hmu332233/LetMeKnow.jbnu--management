import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordView.scss';

import moment from'moment';
import _isEmpty from 'lodash/isEmpty';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from 'reactstrap';

const StringView = ({ value }) => {
  return value;
}

const LinkView = ({ value }) => {
  return value;
}

class UserWordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ListGroupItem 
        className={styles.UserWordView}
        onClick={this.props.clickHandler}
      >
        <ListGroupItemText>
          {this.props.content}
          <Badge color="info">{this.props.count}</Badge>
        </ListGroupItemText>
        <ListGroupItemText>
          {moment(this.props.lastTimestamp).calendar()}<br/>
          {this.props.lastUserId}
        </ListGroupItemText>
        
      </ListGroupItem>
    );
  }
}


UserWordView.propTypes = {
  content: PropTypes.string,
  count: PropTypes.number,
  lastUserId: PropTypes.string,
  lastTimestamp: PropTypes.number,
  clickHandler: PropTypes.func
  // views: PropTypes.arrayOf(PropTypes.shape({
  //   key: PropTypes.string,
  //   value: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.number
  //   ])
  // })),
};
UserWordView.defaultProps = {
  content: '',
  count: 0,
  lastUserId: '',
  lastTimestamp: '',
  // views: []
};

export default UserWordView;