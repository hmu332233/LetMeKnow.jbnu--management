import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.scss';

import classnames from 'classnames';
import {
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from 'reactstrap';

import useInput from 'hooks/useInput';

function LoginForm(props) {
  const [id, setId, onChangeId] = useInput();
  const [password, setPassword, onChangePassword] = useInput();

  const handleButtonClick = () => {
    props.buttonClickHandler({ id, password });
  };

  return (
    <Card className={classnames(styles.LoginForm, props.className)}>
      <CardBody>
        <FormGroup>
          <Label for="LoginForm__id">ID</Label>
          <Input
            type="text"
            name="id"
            id="LoginForm__id"
            placeholder="with a placeholder"
            value={id}
            onChange={onChangeId}
          />
        </FormGroup>
        <FormGroup>
          <Label for="LoginForm__password">Password</Label>
          <Input
            type="password"
            name="password"
            id="LoginForm__password"
            placeholder="password placeholder"
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <Button onClick={handleButtonClick}>로그인</Button>
      </CardBody>
    </Card>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
  buttonClickHandler: PropTypes.func,
};
LoginForm.defaultProps = {
  className: '',
  buttonClickHandler: v => v
};

export default LoginForm;
