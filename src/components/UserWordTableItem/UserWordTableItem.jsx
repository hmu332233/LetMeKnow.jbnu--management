import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTableItem.scss';

import moment from 'moment';

class UserWordTableItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <tr className={styles.UserWordTableItem}>
        <th>{this.props.content} ({this.props.count})</th>
        <th className={styles.UserWordTableItem__date}>{moment(this.props.lastTimestamp).calendar()}</th>
        <th>{this.props.lastUserId}</th>
      </tr>
    );
  }
}

UserWordTableItem.propTypes = {
  content: PropTypes.string,
  count: PropTypes.number,
  lastUserId: PropTypes.string,
  lastTimestamp: PropTypes.number,
  clickHandler: PropTypes.func
};
UserWordTableItem.defaultProps = {
  content: '',
  count: 0,
  lastUserId: '',
  lastTimestamp: '',
};

export default UserWordTableItem;