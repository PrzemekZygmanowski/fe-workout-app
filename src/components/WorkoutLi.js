import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentWorkout } from "../reducers/currentWorkoutAction";
import { WorkoutLiStyle } from "./styles";
import "./style.css";

export const WorkoutLi = ({ workout }) => {
  const dispatch = useDispatch();

  const navigateToWorkout = () => {
    dispatch(setCurrentWorkout(workout.id));
  };

  return (
    <NavLink
      class="workoutLi"
      style={WorkoutLiStyle}
      to={`/workouts/${workout.id}`}
      onClick={navigateToWorkout}
    >
      {workout.name}
    </NavLink>
  );
};
