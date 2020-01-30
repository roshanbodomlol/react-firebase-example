import {
  SET_APP_LOADING
} from '../actionTypes';

export const setAppLoading = (flag) => dispatch => {
  dispatch({
   type: SET_APP_LOADING,
   payload: flag
  });
};
