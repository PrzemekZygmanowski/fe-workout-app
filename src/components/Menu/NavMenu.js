import React from "react";

const NavMenu = ({ children, styles }) => {
  return <nav style={styles}>{children}</nav>;
};

export default NavMenu;
