import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  menuActiveStyles,
  menuDisactiveStyles,
  link,
  activeLink,
} from "./styles";
import "./style.css";
import NavMenu from "./NavMenu";
import { Burger } from "./Burger";

const SideBar = ({ active }) => {
  const [isActive, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!isActive);
    console.log(isActive);
  };

  // const activeClass = active ? "activeLink" : "link";
  return (
    <div>
      <Burger onClick={handleClick} />
      <NavMenu styles={isActive ? menuActiveStyles : menuDisactiveStyles}>
        <NavLink activeStyle={activeLink} style={link} to="/">
          Home
        </NavLink>
        <NavLink activeStyle={activeLink} style={link} to="/workouts">
          Workouts
        </NavLink>
        <NavLink activeStyle={activeLink} style={link} to="/createworkout">
          Create Workout
        </NavLink>
      </NavMenu>
    </div>
  );
};

export default SideBar;
