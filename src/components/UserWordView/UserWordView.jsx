import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordView.scss';

class UserWordView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const contentElement = this.props.content;
    const countElement = this.props.count;

    const userWordElements = [
      contentElement,
      countElement
    ]

    return (
      <div className={styles.UserWordView}>
        {userWordElements}
      </div>
    );
  }
}


UserWordView.propTypes = {
  content: PropTypes.string,
  count: PropTypes.number
};
UserWordView.defaultProps = {
};

export default UserWordView;