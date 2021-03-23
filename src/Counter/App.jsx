import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CounterProvider from "./context/CounterContext";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Counter from "./components/Counter";
import About from "./components/About";

export default function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <CounterProvider>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Router>
        </CounterProvider>
      </div>
    </>
  );
}
