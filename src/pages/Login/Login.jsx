import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';

import SingleLayout from 'components/SingleLayout';
import LoginForm from 'components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick({ id, password }) {
    console.log(id, password)
  }

  render() {
    return (
      <SingleLayout>
        <div className="col-login mx-auto">
          <LoginForm buttonClickHandler={this.handleButtonClick} />
        </div>
      </SingleLayout>
    );
  }
}

Login.propTypes = {
};
Login.defaultProps = {
};

export default Login;