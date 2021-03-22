import React from "react";
import CounterProvider from "./context/CounterContext";
import "./App.css";
import Count from "./components/Count";
import DecBtn from "./components/DecBtn";
import ResBtn from "./components/ResBtn";
import IncBtn from "./components/IncBtn";

export default function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Count />
        <div className="btn-group">
          <DecBtn />
          <ResBtn />
          <IncBtn />
        </div>
      </CounterProvider>
    </div>
  );
}
