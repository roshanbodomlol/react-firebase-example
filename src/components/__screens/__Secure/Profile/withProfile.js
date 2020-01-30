import React from 'react';
import { connect } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

import { setAppLoading } from '../../../../redux/actions/global.actions';
import { message } from 'antd';

const withProfile = ProfileComponent => {
  const mapStateToProps = ({ firebase }) => ({ firebase });
  const WithProfile = ({ firebase, dispatch }) => {
    const fire = useFirebase();
    const submit = async ({
      name,
      phone,
      address,
      dob,
      securityAnswer1,
      securityAnswer2,
      securityAnswer3,
      photo
    }) => {
      dispatch(setAppLoading(true));

      // upload photo if changed
      let photoURL = '';
      if (typeof photo === 'object') {
        const { uploadTaskSnapshot } = await fire.uploadFile('avatars', photo);
        photoURL = await uploadTaskSnapshot.ref.getDownloadURL();
      }

      fire.updateProfile({
        name,
        phone,
        address,
        dob,
        securityAnswer1,
        securityAnswer2,
        securityAnswer3,
        photo: typeof photo === 'object' ? photoURL : photo
      }).then(() => {
        dispatch(setAppLoading(false));
        message.info('Profile Updated');
      }).catch((e) => {
        dispatch(setAppLoading(false));
        message.error(e.message);
      });
    };

    return (
      <ProfileComponent
        info={{ ...firebase.profile, email: firebase.auth.email }}
        submit={submit}
      />
    );
  }

  return connect(mapStateToProps)(WithProfile);
};

export default withProfile;
