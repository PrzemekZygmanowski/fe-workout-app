import { gql } from "@apollo/client";

export const GET_WORKOUT_BY_ID = gql`
  query getWorkoutById($id: ID) {
    getWorkoutById(id: $id) {
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
