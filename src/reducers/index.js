import { combineReducers } from 'redux';
import testStateReducer from './testStateReducer';
import messagesReducer from './messagesReducer';
import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;

const rootReducer = combineReducers({
  testState: testStateReducer,
  messages: messagesReducer
});

export default rootReducer;