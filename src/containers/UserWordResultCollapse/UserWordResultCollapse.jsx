import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordResultCollapse.scss';

import axios from 'axios';
import { Collapse } from 'reactstrap';

import Loader from 'components/Loader';

class UserWordResultCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      message: ''
    };

    this.fetchResult = this.fetchResult.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isOpen && nextState.isLoading) {
      this.fetchResult();
      return false;
    }
    return true;
  }

  fetchResult() {
    axios.post('/api/v1/bot/message', { message: this.props.sendingMessage })
      .then((res) => {
        if (res.data.success) {
          this.setState({ 
            isLoading: false,
            message: res.data.data.template.outputs[0].simpleText.text
          });
        } else {
          this.setState({ 
            isLoading: false,
            message: '실패!' 
          });
        }
      });
  }

  render() {
    return (
      <Collapse isOpen={this.props.isOpen}>
        <div className={styles.UserWordResultCollapse}>
          {this.state.isLoading && <Loader />}
          {this.state.isLoading || this.state.message}
        </div>
      </Collapse>
    );
  }
}

UserWordResultCollapse.propTypes = {
  isOpen: PropTypes.bool,
  sendingMessage: PropTypes.string
};
UserWordResultCollapse.defaultProps = {
  isOpen: false,
  sendingMessage: ''
};

export default UserWordResultCollapse;