import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;

const messagesReducer = (state = {}, action) => {
  let newMessagesState;
  const { user, message, id, isResolved, timeOpen } = action;
  switch (action.type) {
  case types.RECEIVE_MESSAGE:
    newMessagesState = Object.assign({}, state);
    newMessagesState[action.message.id] = action.message;
    return newMessagesState;
  default:
    return state;
  }
};

export default messagesReducer;