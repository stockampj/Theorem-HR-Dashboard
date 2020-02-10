import constants from './../constants';
const { initialState, types, firebaseConfig } = constants;

const testStateReducer = (state = initialState.testState, action) => {
  let newTestState;
  switch (action.type) {
  case types.CHANGE_STATE1:
    newTestState = action.payload1;
    return newTestState;
  default:
    return state;
  }
};

export default testStateReducer;