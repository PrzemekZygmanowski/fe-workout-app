import React from "react";
import "./style.css";

const NavMenu = ({ children, styles }) => {
  return <nav style={styles}>{children}</nav>;
};

export default NavMenu;
