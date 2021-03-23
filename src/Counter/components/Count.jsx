import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Typography } from "@material-ui/core";
export default function Count() {
  const { counter } = useContext(CounterContext);
  return (
    <Typography align="center" variant="h1">
      {counter}
    </Typography>
  );
}
