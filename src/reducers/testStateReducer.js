import constants from './../constants';
const { initialState, types } = constants;

const testStateReducer = (state = initialState.testState, action) => {
  let newTestState;
  switch (action.type) {
  case types.CHANGE_STATE1:
    newTestState = action.payload1;
    return newTestState;
  case types.CHANGE_STATE2:
    newTestState = action.payload2;
    return newTestState;
  default:
    return state;
  }
};

export default testStateReducer;