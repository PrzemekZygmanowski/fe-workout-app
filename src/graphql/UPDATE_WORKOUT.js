import { gql } from "@apollo/client";

export const UPDATE_WORKOUT = gql`
  mutation updateWorkout($id: ID, $workout: UpdateWorkoutInput) {
    updateWorkout(id: $id, workout: $workout) {
      id
      name
      workoutType
      timerType
      description
      equipment
      time
      score
    }
  }
`;
