import React from 'react';
import { Row, Col } from 'antd';

import withSignIn from './withSignIn';
import { BasicBlock } from '../../Block';
import Login from '../../__forms/Login';
import Register from '../../__forms/Register';
import './SignIn.scss';

const SignIn = ({ onRegister, onLogin }) => (
  <div id="sign-in">
    <div className="container">
      <Row type="flex" justify="center">
        <Col span={18}>
        <div className="cards">
          <Row type="flex">
            <Col lg={12} xs={24}>
              <BasicBlock
                iconTitle="Login"
              >
                <Login onSubmit={onLogin}/>
              </BasicBlock>
            </Col>
            <Col lg={12} xs={24}>
              <BasicBlock
                iconTitle="Register"
                className="--purple"
              >
                <Register onSubmit={onRegister}/>
              </BasicBlock>
            </Col>
          </Row>
        </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default withSignIn(SignIn);
