import { gql } from "@apollo/client";

export const GET_ALL_WORKOUTS = gql`
  {
    getAllWorkouts {
      id
      timerType
      name
      description
      workoutType
      equipment
    }
  }
`;

export const GET_WORKOUTS_TITLES = gql`
  {
    getAllWorkouts {
      id
      name
    }
  }
`;
