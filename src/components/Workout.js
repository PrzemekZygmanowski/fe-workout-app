import React from "react";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT_BY_ID } from "../graphql/GET_WORKOUT_BY_ID";
import { useSelector } from "react-redux";
import { Workout as WorkoutCommon } from "./commons/Workout";

export const Workout = () => {
  const workout = useSelector((state) => state.currentWorkout);
  const { data, error, loading } = useQuery(GET_WORKOUT_BY_ID, {
    variables: {
      id: workout.id,
    },
  });
  if (loading) return "it's loading";
  if (error) return `there is some error! ${error.message}`;

  return data && <WorkoutCommon data={data.getWorkoutById} />;
};
