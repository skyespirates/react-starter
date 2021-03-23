import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <Navbar className="px-5" bg="primary" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/books">Booklist</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Navbar>
    </>
  );
}
