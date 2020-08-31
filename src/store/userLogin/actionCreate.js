import {USER_LOGIN, SAVE_USER, RESET_USER_DATA} from './types';

export const userLogin = (data) => ({type: USER_LOGIN, payload: data});

export const saveUserData = () => ({type: SAVE_USER});

export const resetUserData = () => ({type: RESET_USER_DATA});