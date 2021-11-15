import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Workouts } from "./pages/Workouts";
import { CreateWorkout } from "./pages/CreateWorkout";
import { Home } from "./pages/Home";
import { Workout } from "./components/Workout";
import SideMenu from "./components/Menu/SideMenu";
import { Provider } from "react-redux";
import store from "./store";

// store.subscribe(() => console.log(store.getState()));
console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createworkout" element={<CreateWorkout />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:id" element={<Workout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
