import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
export default function Count() {
  const { counter } = useContext(CounterContext);
  return <h1>{counter}</h1>;
}
