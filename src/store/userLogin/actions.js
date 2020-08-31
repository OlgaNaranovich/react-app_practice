import { userLogin, saveUserData, resetUserData } from './actionCreate';

export const setUserData = (data) => (dispatch) =>  {
  dispatch(userLogin(data));
}

export const isUserDataSaved = () => (dispatch) =>  {
  dispatch(saveUserData());
}


export const isUserDataReset = () => (dispatch) =>  {
  dispatch(resetUserData());
}

