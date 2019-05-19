import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChatCard.scss';

import { Card, CardBody, CardFooter, Input } from "reactstrap";
import axios from 'axios';

class ChatCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendingMessage: '',
      receivedMessage: ''
    };

    this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  handleInputChange(e) {
    this.setState({ sendingMessage: e.target.value });
  }
  handleInputKeyPress(e) {
    if (e.key === 'Enter') {
      
      this.sendMessage();
    }
  }

  sendMessage() {
    const { sendingMessage } = this.state;
    axios.post('/api/v1/bot/message', { message: sendingMessage }).then((res) => {
      if (res.data.success) {
        this.setState({ 
          sendingMessage: '',
          receivedMessage: res.data.data.message.text
        });
      } else {
        this.setState({ 
          sendingMessage: '',
          receivedMessage: '실패!' 
        });
      }
    });
  }

  render() {
    return (
      <Card className={styles.ChatCard}>
        <CardBody className={styles.ChatCard__body}>
          {this.state.receivedMessage}
        </CardBody>
        <CardFooter>
          <Input
            value={this.state.sendingMessage}
            onChange={this.handleInputChange}
            onKeyPress={this.handleInputKeyPress}
          />
        </CardFooter>
      </Card>
    );
  }
}


ChatCard.propTypes = {
};
ChatCard.defaultProps = {
};

export default ChatCard;