import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTableItem.scss';

import moment from 'moment';

function UserWordTableItem(props) {
  return (
    <tr className={styles.UserWordTableItem}>
      <th>{props.content} ({props.count})</th>
      <th className={styles.UserWordTableItem__date}>{moment(props.lastTimestamp).calendar()}</th>
      <th className={styles.UserWordTableItem__userId}>{props.lastUserId}</th>
    </tr>
  );
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
  clickHandler: v => v
};

export default React.memo(UserWordTableItem);