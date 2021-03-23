import React from "react";
import BookProvider from "./context/BookContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import Booklist from "./components/Booklist";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <BookProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/books">
            <InputForm />
            <Booklist />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BookProvider>
    </Router>
  );
}
