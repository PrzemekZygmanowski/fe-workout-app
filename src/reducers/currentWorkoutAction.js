export const CURRENT_WORKOUT = "CURRENT_WORKOUT";

export const setCurrentWorkout = (id) => {
  return {
    type: CURRENT_WORKOUT,
    payload: { id },
  };
};
