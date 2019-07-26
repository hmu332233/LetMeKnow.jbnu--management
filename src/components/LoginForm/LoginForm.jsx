import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.scss';

import classnames from 'classnames';
import {
  Button,
  FormGroup,
  Label,
  Card,
  CardBody
} from 'reactstrap';

import Input from 'components/Input';
import useInput from 'hooks/useInput';

function LoginForm(props) {
  const [id, setId, onChangeId] = useInput();
  const [password, setPassword, onChangePassword] = useInput();
  const passwordRef = useRef(null);

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
            value={id}
            onChange={onChangeId}
            nextInput={passwordRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="LoginForm__password">Password</Label>
          <Input
            type="password"
            name="password"
            id="LoginForm__password"
            value={password}
            onChange={onChangePassword}
            innerRef={passwordRef}
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
