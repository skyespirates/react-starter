import { createContext, useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
