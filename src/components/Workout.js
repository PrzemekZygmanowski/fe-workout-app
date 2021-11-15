import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "../graphql/GET_WORKOUT_BY_ID";
import { useSelector } from "react-redux";

export const Workout = () => {
  const workout = useSelector((state) => state.currentWorkout);
  const { data, error, loading } = useQuery(GET_WORKOUT_BY_ID, {
    variables: {
      id: workout.id,
    },
  });
  if (loading) {
    console.log("it's loading");
  }
  if (error) {
    console.log(error);
  }

  return (
    <>
      <h1>{data && data.getWorkoutById.name}</h1>
      <h2>{data && data.getWorkoutById.workoutType}</h2>
      <h2>{data && data.getWorkoutById.timerType}</h2>
      <p>{data && data.getWorkoutById.description}</p>
      <p>{data && data.getWorkoutById.equipment}</p>
    </>
  );
};
