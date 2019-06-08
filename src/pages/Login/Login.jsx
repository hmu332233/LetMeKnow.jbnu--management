import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';

import axios from 'axios';

import SingleLayout from 'components/SingleLayout';
import LoginForm from 'components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.login = this.login.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick({ id, password }) {
    this.login({ id, pw: password });
  }

  login({ id, pw }) {
    const data = {
      id,
      pw
    };
    axios.post('/api/v1/auth/signin', data).then(res => {
      if (res.data.success) {
        window.location.replace('/');
      } else {
        console.log('로그인 실패');
      }
    })
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