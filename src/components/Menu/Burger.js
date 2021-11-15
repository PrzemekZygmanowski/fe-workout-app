import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const burgerStyle = {
  position: "fixed",
  right: "5%",
  color: "#e58e26",
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  cursor: "pointer",
  fontSize: 24,
};

export const Burger = ({ onClick }) => {
  return (
    <button style={burgerStyle} onClick={onClick}>
      <FontAwesomeIcon icon={faHamburger} />
    </button>
  );
};
