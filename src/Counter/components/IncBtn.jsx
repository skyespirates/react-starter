import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function IncBtn() {
  const { dispatch } = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
  );
}
