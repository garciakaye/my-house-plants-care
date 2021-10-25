import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-flex",
  padding: "12px",
  margin: "0 7px 7px",
  background: "white",
  textDecoration: "none",
  color: "Black",
};

function NavBar() {
  return (
  <div className="navbar">
    <NavLink
      to="/"
      exact
      style={linkStyles}
      activeStyle={{
        background: "black",
        color: "white"
      }} 
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={linkStyles}
      activeStyle={{
        background: "black",
        color: "white"
      }} 
    >
      About
    </NavLink>
    <NavLink
      to="/new-plant"
      exact
      style={linkStyles}
      activeStyle={{
        background: "black",
        color: "white"
      }} 
    >
      New Plant
    </NavLink>
    <NavLink
      to="/details"
      exact
      style={linkStyles}
      activeStyle={{
        background: "black",
        color: "white"
      }} 
    >
      Details
    </NavLink>
  </div>
  );
}

export default NavBar;