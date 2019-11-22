import { useContext } from "react";

const useStateProvider = stateContext => {
  return useContext(stateContext);
};

export default useStateProvider;
