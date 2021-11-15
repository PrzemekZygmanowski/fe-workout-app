import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Workouts } from "./pages/Workouts";
import { CreateWorkout } from "./pages/CreateWorkout";
import { Home } from "./pages/Home";
import SideMenu from "./components/Menu/SideMenu";

function App() {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createworkout" element={<CreateWorkout />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </Router>
  );
}

export default App;
