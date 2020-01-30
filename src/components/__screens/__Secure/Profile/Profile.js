import React from 'react';

import withProfile from './withProfile';
import Register from '../../../__forms/Register';
import './Profile.scss';
import { Row, Col } from 'antd';

const Profile = ({ info, submit }) => (
  <div id="profile">
    <div className="container">
      <Row type="flex" justify="center">
        <Col lg={12} xs={24}>
          <div className="profile-form">
            <h1>Profile</h1>
            <Register editMode userData={info} onSubmit={submit}/>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default withProfile(Profile);
