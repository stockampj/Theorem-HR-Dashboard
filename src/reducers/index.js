import { combineReducers } from 'redux';
import testStateReducer from './testStateReducer';
import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;

const rootReducer = combineReducers({
  testState: testStateReducer
});

export default rootReducer;