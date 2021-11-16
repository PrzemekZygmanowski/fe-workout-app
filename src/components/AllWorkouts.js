import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_WORKOUTS } from "../graphql/GET_ALL_WORKOUTS";
import { Workout as WorkoutCommon } from "./commons/Workout";
import "../pages/style.css";

export const AllWorkouts = () => {
  const [getWorkouts, { data, error, loading }] =
    useLazyQuery(GET_ALL_WORKOUTS);
  if (loading) return "it's loading";
  if (error) return `there is some error! ${error.message}`;

  return (
    <>
      <button onClick={getWorkouts}>Get All Workouts</button>
      {data &&
        data.getAllWorkouts.map((workout) => {
          return <WorkoutCommon key={workout.id} data={workout} />;
        })}
    </>
  );
};
