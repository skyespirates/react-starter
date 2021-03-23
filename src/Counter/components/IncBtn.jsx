import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Button } from "@material-ui/core";
export default function IncBtn() {
  const { dispatch } = useContext(CounterContext);
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => dispatch({ type: "INCREMENT" })}
    >
      Increment
    </Button>
  );
}
