import React from "react";

export const Workout = ({ data }) => {
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.workoutType}</h2>
      <h2>{data.timerType}</h2>
      <p>{data.description}</p>
      <p>{data.equipment}</p>
    </>
  );
};
