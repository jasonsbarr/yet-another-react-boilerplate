import { makeReducer, setState } from "@jasonsbarr/reducer-utils";

const setStateProp = setState("state");
const initialState = {};

const SET_STATE = (state = initialState, { payload }) =>
  setStateProp(state, payload);

export default makeReducer({
  SET_STATE
});
