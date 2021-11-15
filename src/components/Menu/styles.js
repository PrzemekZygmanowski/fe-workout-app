// import CSS from "csstype";

const menuActiveStyles = {
  backgroundColor: "#8395a7",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  width: "20vw",
  display: "flex",
  flexDirection: "column",
  transition: "0.3s ease-in-out",
};
const menuDisactiveStyles = {
  backgroundColor: "#2d3436",
  position: "fixed",
  left: "-20vw",
  top: 0,
  bottom: 0,
  width: "20vw",
  display: "flex",
  flexDirection: "column",
  transition: "0.3s ease-in-out",
};

const activeLink = {
  color: "#2d3436",
  backgroundColor: "#e58e26",
  fontFamily: "arial",
  textDecoration: "none",
  margin: "20px auto",
  width: "20vw",
  textAlign: "center",
  transition: "0.3s ease-in-out",
};
const link = {
  color: "#2d3436",
  backgroundColor: "transparent",
  fontFamily: "arial",
  textDecoration: "none",
  margin: "20px auto",
};
export { menuActiveStyles, menuDisactiveStyles, link, activeLink };
