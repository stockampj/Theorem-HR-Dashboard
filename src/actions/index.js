import * as types from './../constants/ActionTypes';
import constants from './../constants';
const { firebaseConfig } = constants;
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

const messages = firebase.database().ref('messages');
const users = firebase.database().ref('users');


export function addMessage(_user, _message) {
  return () => messages.push({
    user: _user,
    message: _message,
    timeOpen: new Date().getTime(),
    isResolved: false
  });
}

export const changeState1 = (payload1) => ({
  type: types.CHANGE_STATE1,
  payload1
});
