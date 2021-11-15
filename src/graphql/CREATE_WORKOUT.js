import { gql } from "@apollo/client";

export const CREATE_WORKOUT = gql`
  mutation createWorkout($workout: WorkoutInput) {
    createWorkout(workout: $workout) {
      name
      workoutType
      timerType
      description
      equipment
    }
  }
`;
