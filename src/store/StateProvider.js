import React, { useReducer, useMemo } from "react";

const store = {};

const StateProvider = ({ reducer, stateContext, children }) => {
  const [state, dispatch] = useReducer(reducer, store[reducer.name]);

  const memoizedState = useMemo(() => {
    return [state, dispatch];
  }, [state]);

  const { Provider } = stateContext;

  return <Provider value={memoizedState}>{children}</Provider>;
};

export default StateProvider;
