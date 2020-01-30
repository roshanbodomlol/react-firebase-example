import React, { useState, useEffect } from 'react';
import { Input, DatePicker, Icon, Tooltip } from 'antd';
import { func, objectOf, any } from 'prop-types';
import moment from 'moment';
import { isString } from 'lodash';

import { CommonButton } from '../../Button';
import './Register.scss';

const Register = ({ onSubmit, userData, editMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDOB] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');
  const [securityAnswer3, setSecurityAnswer3] = useState('');
  const dateFormat = 'YYYY-MM-DD';
  
  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
      setPhone(userData.phone);
      setPhoto(userData.photo);
      setAddress(userData.address);
      setDOB(userData.dob);
      setSecurityAnswer1(userData.securityAnswer1);
      setSecurityAnswer2(userData.securityAnswer2);
      setSecurityAnswer3(userData.securityAnswer3);
    }
  }, [userData]);
  
  return (
    <div id="register-form">
      <Input
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {
        !!userData
          ? (
            <Input
              readOnly
              value={email}
            />
          )
          : (
            <Input
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          )
      }
      <span className="label">Profile Picture</span>
      {
        isString(photo)
          ? (
            <div className="profile-picture">
              <Tooltip title="Remove">
                <Icon type="close-circle" theme="filled" onClick={() => setPhoto(null)}/>
              </Tooltip>
              <img src={photo} alt=""/>
            </div>
          )
          : (
            <Input
              type="file"
              onChange={e => setPhoto(e.target.files[0])}
              accept="image/png, image/jpeg"
            />
          )
      }
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <Input
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      {
        !!dob && editMode
          ? (
            <DatePicker
              value={moment(dob)}
              format={dateFormat}
              placeholder="Date Of Birth"
              onChange={(date, dateString) => setDOB(dateString)}
            />
          )
          : (
            <DatePicker
              format={dateFormat}
              placeholder="Date Of Birth"
              onChange={(date, dateString) => setDOB(dateString)}
            />
          )
      }
      
      <div className="security-questions">
        <p>Security Questions</p>
        <div className="question">
          <p>What is your first pet's name?</p>
          <Input
            value={securityAnswer1}
            onChange={e => setSecurityAnswer1(e.target.value)}
          />
        </div>
        <div className="question">
          <p>Where were you born?</p>
          <Input
            value={securityAnswer2}
            onChange={e => setSecurityAnswer2(e.target.value)}
          />
        </div>
        <div className="question">
          <p>What is your first pet's name?</p>
          <Input
            value={securityAnswer3}
            onChange={e => setSecurityAnswer3(e.target.value)}
          />
        </div>
      </div>
      {
        !userData && (
          <>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </>
        )
      }
      <div><small>* All fields are mandatory</small></div>
      <CommonButton
        mode={userData ? 'primary' : 'transparent'}
        size="medium"
        onClick={() => {
          onSubmit({
            name,
            email,
            password,
            confirmPassword,
            phone,
            address,
            dob,
            securityAnswer1,
            securityAnswer2,
            securityAnswer3,
            photo
          });
        }}
      >
        {userData ? 'SAVE' : 'REGISTER'}
      </CommonButton>
    </div>
  );
};

Register.propTypes = {
  onSubmit: func.isRequired,
  userData: objectOf(any)
};

Register.defaultProps = {
  userData: null
};

export default Register;
