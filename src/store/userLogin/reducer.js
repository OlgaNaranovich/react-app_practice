import {combineReducers} from 'redux';
import { USER_LOGIN, SAVE_USER, RESET_USER_DATA } from './types';
import {initialUserState} from '../../pages/Login/Login.helper';

const userData = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}

const userDataSaved = (state = false, action) => {
  switch (action.type) {
    case SAVE_USER:
      return state = true;
    case RESET_USER_DATA:
      return state = false;

    default:
      return state;
  }
}

export const reducer = combineReducers({
  userData,
  userDataSaved
  }
)