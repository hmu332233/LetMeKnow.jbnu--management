import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTableItem.scss';

import moment from 'moment';
import classnames from 'classnames';

import useToggle from 'hooks/useToggle';

import UserWordResultCollapse from 'containers/UserWordResultCollapse';

function UserWordTableItem(props) {
  const [isOpenCollapse, toggle] = useToggle(false);
  const isLink = props.utterance.includes('http://');
  const handleClick = () => {
    isLink && window.open(props.content, '_blank');
    toggle();
  }

  return (
    <React.Fragment>
    <tr className={classnames(styles.UserWordTableItem, isLink && styles.clickable)} onClick={handleClick}>
      <th>{props.utterance} ({props.count})</th>
      <th className={styles.UserWordTableItem__userId}>{props.context}</th>
      <th className={styles.UserWordTableItem__date}>{moment(props.lastTimestamp).calendar()}</th>
      <th className={styles.UserWordTableItem__userId}>{props.block}</th>
      <th className={styles.UserWordTableItem__userId}>{props.lastUserId}</th>
    </tr>
    <UserWordResultCollapse isOpen={isOpenCollapse} sendingMessage={props.context || props.utterance} />
    </React.Fragment>
  );
}

UserWordTableItem.propTypes = {
  utterance: PropTypes.string,
  context: PropTypes.string,
  count: PropTypes.number,
  block: PropTypes.string,
  lastUserId: PropTypes.string,
  lastTimestamp: PropTypes.number
};
UserWordTableItem.defaultProps = {
  utterance: '',
  context: '',
  count: 0,
  block: '',
  lastUserId: '',
  lastTimestamp: '',
};

export default React.memo(UserWordTableItem);