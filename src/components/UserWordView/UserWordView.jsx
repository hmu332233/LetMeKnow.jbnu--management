import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserWordView.scss';

import _isEmpty from 'lodash/isEmpty';

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

    const userWordElements = this.props.views.map(view => {
      return <StringView value={view.value} />
    })

    return (
      <div className={styles.UserWordView} onClick={this.props.clickHandler}>
        {userWordElements}
      </div>
    );
  }
}


UserWordView.propTypes = {
  views: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  clickHandler: PropTypes.func
};
UserWordView.defaultProps = {
  views: []
};

export default UserWordView;