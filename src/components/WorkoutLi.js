import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentWorkout } from "../reducers/currentWorkoutAction";

export const WorkoutLi = ({ workout }) => {
  const dispatch = useDispatch();

  const navigateToWorkout = () => {
    console.log(workout.id);
    dispatch(setCurrentWorkout(workout.id));
  };

  return (
    <NavLink to={`/workouts/${workout.id}`} onClick={navigateToWorkout}>
      {workout.name}
    </NavLink>
  );
};
