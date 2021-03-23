import React from "react";
import Count from "./Count";
import DecBtn from "./DecBtn";
import ResBtn from "./ResBtn";
import IncBtn from "./IncBtn";
export default function Counter() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <Count />
      <div className="btn-group">
        <DecBtn />
        <ResBtn />
        <IncBtn />
      </div>
    </div>
  );
}
