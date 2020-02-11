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

export function watchFirebaseMessagesRef() {
  return function(dispatch) {
    messages.on('child_added', data => {
      console.log(data.val())
      const newMessage = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      console.log(newMessage);
      dispatch(receiveMessage(newMessage));
    });
  };
}

export const receiveMessage = (messageFromFireBase) => {
  return {
    type: types.RECEIVE_MESSAGE,
    message: messageFromFireBase
  };
}


export const changeState1 = (payload1) => ({
  type: types.CHANGE_STATE1,
  payload1
});
