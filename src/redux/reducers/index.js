import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import global, { initialState as globalState } from './global.reducer';

export const initialState = {
  global: globalState
};

export default combineReducers({
  global,
  firebase: firebaseReducer
});
