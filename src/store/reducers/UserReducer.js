import { LOGIN, REGISTRATION, VERIFY_EMAIL } from '../constants';

const INITIAL_STATE = {
  user: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case REGISTRATION:
      return {
        ...state,
      }
    default:
      return state;
  }
};
