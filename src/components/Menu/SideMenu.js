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

const SideBar = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <div>
      <Burger onClick={handleClick} />
      <NavMenu styles={isActive ? menuActiveStyles : menuDisactiveStyles}>
        <NavLink activestyle={activeLink} style={link} to="/">
          Home
        </NavLink>
        <NavLink activestyle={activeLink} style={link} to="/workouts">
          Workouts
        </NavLink>
        <NavLink activestyle={activeLink} style={link} to="/createworkout">
          Create Workout
        </NavLink>
        <NavLink activestyle={activeLink} style={link} to="/allworkouts">
          Lazy Quering
        </NavLink>
      </NavMenu>
    </div>
  );
};

export default SideBar;
