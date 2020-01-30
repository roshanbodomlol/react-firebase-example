import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import sitemap from '../../routing/sitemap';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={() => isLoaded(auth) && !isEmpty(auth)
        ? children
        : (
          <Redirect to={sitemap.signIn}/>
        )
      }
    />
  );
};

export default PrivateRoute;
