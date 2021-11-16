import React from "react";
import "./style.css";

export const Workout = ({ data }) => {
  return (
    <div className="container">
      <p className="label text">workout name</p>
      <h1 className="text name">{data.name}</h1>
      <p className="label text">workout type</p>
      <h2 className="type text">{data.workoutType}</h2>
      <p className="label text">timer type</p>
      <h2 className="type text">{data.timerType}</h2>
      <p className="label text">description</p>
      <p className="recipe text">{data.description}</p>
      <p className="label text">equipment</p>
      <p className="recipe text">{data.equipment}</p>
    </div>
  );
};
