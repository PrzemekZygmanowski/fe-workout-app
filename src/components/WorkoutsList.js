import React from "react";
import { WorkoutLi } from "./WorkoutLi";
import { useQuery } from "@apollo/client";
import { GET_WORKOUTS_TITLES } from "../graphql/GET_ALL_WORKOUTS";
import "./style.css";

export const WorkoutsList = () => {
  const { data, error, loading } = useQuery(GET_WORKOUTS_TITLES);
  if (loading) {
    console.log("it's loading");
  }
  if (error) {
    console.log(error);
  }

  return (
    <div className="list">
      {data &&
        data.getAllWorkouts.map((workout) => {
          return <WorkoutLi key={workout.id} workout={workout} />;
        })}
    </div>
  );
};
