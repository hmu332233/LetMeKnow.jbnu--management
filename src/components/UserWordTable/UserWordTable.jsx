import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTable.scss';

import { Table } from 'reactstrap';

import UserWordTableItem from 'components/UserWordTableItem';

function UserWordTable(props) {
  return (
    <Table className={styles.UserWordTable} hover>
      <tbody>
        {props.userWords.map(userWord => (
          <UserWordTableItem
            key={userWord.context}
            utterance={userWord.utterance}
            context={userWord.context}
            count={userWord.count}
            block={userWord.block}
            lastUserId={userWord.lastUserId}
            lastTimestamp={userWord.lastTimestamp}
          />
        ))}
      </tbody>
    </Table>
  );
}

UserWordTable.propTypes = {
  userWords: PropTypes.arrayOf(
    PropTypes.shape({
      utterance: PropTypes.string,
      context: PropTypes.string,
      block: PropTypes.string,
      count: PropTypes.number,
      lastUserId: PropTypes.string,
      lastTimestamp: PropTypes.number,
    })
  )
};
UserWordTable.defaultProps = {
  userWords: []
};

export default UserWordTable;
