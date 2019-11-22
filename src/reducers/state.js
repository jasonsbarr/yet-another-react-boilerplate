import { makeReducer, setState } from "../utils";

const SET_STATE = (state, { payload }) => setState(state, payload);

export default makeReducer({
  SET_STATE,
});
