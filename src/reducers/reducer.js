import { makeReducer, setState } from "Utils";

const setStateProp = setState("state");
const initialState = {};

const SET_STATE = (state = initialState, { payload }) =>
  setStateProp(state, payload);

export default makeReducer({
  SET_STATE
});
