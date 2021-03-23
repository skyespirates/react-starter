import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { Button } from "@material-ui/core";
export default function ResBtn() {
  const { dispatch } = useContext(CounterContext);
  return (
    <Button variant="contained" onClick={() => dispatch({ type: "RESET" })}>
      Reset
    </Button>
  );
}
