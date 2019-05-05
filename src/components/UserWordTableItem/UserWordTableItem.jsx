import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTableItem.scss';

import moment from 'moment';
import classnames from 'classnames';

function UserWordTableItem(props) {

  const isLink = props.content.includes('http://');
  const handleClick = () => isLink && window.open(props.content, '_blank');

  return (
    <tr className={classnames(styles.UserWordTableItem, isLink && styles.clickable)} onClick={handleClick}>
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
  lastTimestamp: PropTypes.number
};
UserWordTableItem.defaultProps = {
  content: '',
  count: 0,
  lastUserId: '',
  lastTimestamp: ''
};

export default React.memo(UserWordTableItem);