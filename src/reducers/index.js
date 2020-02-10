import { combineReducers } from 'redux';
import testStateReducer from './testStateReducer';

const rootReducer = combineReducers({
  testState: testStateReducer
});

export default rootReducer;