import {profileForm} from '../../store/userLogin/types';

export const initialUserState = profileForm.reduce((a, {name}) => {
  a[name] = {value: '', error: ''};
  return a;
}, {});

export const errorMessages = profileForm.reduce((a, {name, errorMessage}) => {
  a[name] = errorMessage;
  return a;
}, {});