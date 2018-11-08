import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordTableItem.scss';

import moment from 'moment';

import { Table } from "tabler-react";

class UserWordTableItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Table.Row className={styles.UserWordTableItem}>
        <Table.Col>{this.props.content} ({this.props.count})</Table.Col>
        <Table.Col className={styles.UserWordTableItem__date}>{moment(this.props.lastTimestamp).calendar()}</Table.Col>
        <Table.Col>{this.props.lastUserId}</Table.Col>
      </Table.Row>
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