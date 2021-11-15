import { configureStore } from "@reduxjs/toolkit";
import currentWorkoutReducer from "./reducers/currentWorkout";

const store = configureStore({
  reducer: {
    currentWorkout: currentWorkoutReducer,
  },
});

export default store;
