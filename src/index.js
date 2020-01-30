import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import App from './App';
import configureStore from './redux/store';
import firebase, { rrConfig } from './firebase';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './styles/global.scss';

const myStore = configureStore();

ReactDOM.render(
  <Provider store={myStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rrConfig}
      dispatch={myStore.dispatch}
    >
      <Router>
        <App/>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
