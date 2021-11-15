import React, { useState } from "react";
import { Workout as WorkoutComponent } from "../components/Workout";
import { UpdateWorkout } from "../components/UpdateWorkout";
import { DELETE_WORKOUT } from "../graphql/DELETE_WORKOUT";
import { setCurrentWorkout } from "../reducers/currentWorkoutAction";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Workout = () => {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.currentWorkout);

  const [deleteWorkout] = useMutation(DELETE_WORKOUT, {
    onCompleted: () => navigate("/workouts") && dispatch(setCurrentWorkout("")),
  });

  const deleteWorkoutFunction = (e) => {
    e.preventDefault();
    deleteWorkout({
      variables: { id: workout.id },
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <>
      <WorkoutComponent />
      <button onClick={deleteWorkoutFunction}>Delete Workout</button>
      <button onClick={handleClick}>Update Workout</button>
      {isActive && <UpdateWorkout />}
    </>
  );
};
