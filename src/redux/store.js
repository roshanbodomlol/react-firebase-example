import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { getFirebase } from 'react-redux-firebase';

import rootReducer, { initialState } from './reducers';

const store = (state = initialState) => {
  const middlewares = [thunk.withExtraArgument(getFirebase), createLogger()];
  return createStore(rootReducer, state, compose(applyMiddleware(...middlewares)));
};

export default store;