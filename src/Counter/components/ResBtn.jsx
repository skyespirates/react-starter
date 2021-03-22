import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function ResBtn() {
  const { dispatch } = useContext(CounterContext);
  return <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>;
}
