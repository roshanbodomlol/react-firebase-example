import React, { useState } from 'react';
import { Input } from 'antd';

import { CommonButton } from '../../Button';
import './Login.scss';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="login-form">
      <Input
        placeholder="Email Address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        autoComplete="off"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <CommonButton
        mode="primary"
        size="medium"
        onClick={() => {
          onSubmit({ email, password });
        }}
      >
        LOGIN
      </CommonButton>
    </div>
  );
};

export default Login;
