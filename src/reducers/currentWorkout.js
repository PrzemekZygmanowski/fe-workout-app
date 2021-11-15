import { CURRENT_WORKOUT } from "./currentWorkoutAction";

const initialState = {
  id: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_WORKOUT: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
