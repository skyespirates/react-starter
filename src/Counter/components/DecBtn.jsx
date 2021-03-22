import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function DecBtn() {
  const { dispatch } = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
  );
}
