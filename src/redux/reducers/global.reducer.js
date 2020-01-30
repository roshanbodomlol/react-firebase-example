import {
  SET_APP_LOADING
} from '../actionTypes';

export const initialState = {
  appLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_LOADING: {
      return {
        ...state,
        appLoading: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
