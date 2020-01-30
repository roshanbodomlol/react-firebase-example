import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { message, notification } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setAppLoading } from '../../../redux/actions/global.actions';
import sitemap from '../../../routing/sitemap';

const withSignIn = SignInComponent => {
  
  const WithSignIn = ({ history, dispatch }) => {
    const firebase = useFirebase();
    const register = ({
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
    }) => {
      // validate
      if (
        !name ||
        !email ||
        !password ||
        !confirmPassword ||
        !phone ||
        !address ||
        !dob ||
        !securityAnswer1 ||
        !securityAnswer2 ||
        !securityAnswer3 ||
        !photo
      ) {
        message.error('Please fill out all the fields.');
        return false;
      }

      if (password !== confirmPassword) {
        message.error('Passwords do not match.');
        return false;
      }

      // start
      dispatch(setAppLoading(true));

      // upload photo first
      firebase
        .uploadFile('avatars', photo)
        .then(({ uploadTaskSnapshot }) => {
          uploadTaskSnapshot
            .ref.getDownloadURL()
            .then(function(downloadURL) {
              const photoURL = downloadURL;
              firebase
                .createUser({
                  email,
                  password
                }, {
                  name,
                  phone,
                  address,
                  dob,
                  securityAnswer1,
                  securityAnswer2,
                  securityAnswer3,
                  photo: photoURL
                })
                .then(() => {
                  dispatch(setAppLoading(false));
                  history.push(sitemap.home);
                  notification.open({
                      message: 'Registration Successful',
                      description:
                      'You can now view your profile.'
                    });
                  })
                  .catch((e) => {
                    dispatch(setAppLoading(false));
                    message.error(e.message);
                  });
          });
        });
    }

    const login = ({email, password}) => {
      if (
        !email ||
        !password
      ) {
        message.error('Please enter both email and password');
        return false;
      }

      dispatch(setAppLoading(true));
      firebase
      .login({email, password})
      .then(() => {
        dispatch(setAppLoading(false));
        message.info('Welcome Back!');
        history.push(sitemap.home);
      })
      .catch((e) => {
          dispatch(setAppLoading(false));
          message.error(e.message);
        });
    };
    return (
      <SignInComponent
        onRegister={register}
        onLogin={login}
      />
    );
  };

  return withRouter(connect()(WithSignIn));
};

export default withSignIn;
