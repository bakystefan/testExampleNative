import { AsyncStorage } from 'react-native';
import * as strings from './strings';

const FBSDK = require('react-native-fbsdk');

const {
  LoginManager,
} = FBSDK;

export function loginAction(data, login) {
  return {
    type: strings.LOGIN,
    userInfo: data,
    login,
  };
}

export function logOutUser(login) {
  return {
    type: strings.LOGOUT,
    login,
  };
}

export function logOutAction() {
  return (dispatch) => {
    try {
      LoginManager.logOut();
      dispatch(logOutUser(false));
    } catch (err) {
      console.log('err on logout facebook', err);
    }
  };
}

export function saved(val) {
  return {
    type: strings.SAVED,
    saved: val,
  };
}

export function saveChanges(name, email) {
  return async (dispatch) => {
    AsyncStorage.setItem('name', name);
    AsyncStorage.setItem('email', email);
    dispatch(saved(true));
  };
}

