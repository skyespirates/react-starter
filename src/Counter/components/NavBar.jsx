import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" style={{ margin: "auto 15px" }}>
          Counter
        </Typography>
        <Typography variant="subtitle2">
          <Link to="/">Home</Link>
        </Typography>
        <Typography variant="subtitle2">
          <Link to="/counter">Counter</Link>
        </Typography>
        <Typography variant="subtitle2">
          <Link to="/about">About</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
