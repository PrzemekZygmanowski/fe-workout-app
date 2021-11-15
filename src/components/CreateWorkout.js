import React, { useState } from "react";
import { CREATE_WORKOUT } from "../graphql/CREATE_WORKOUT";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export const CreateWorkout = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    workout: {
      name: "",
      workoutType: "",
      timerType: "",
      description: "",
      equipment: "",
    },
  });

  const [createWorkout] = useMutation(CREATE_WORKOUT, {
    onCompleted: () => navigate("/"),
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formState);
          createWorkout({
            variables: {
              workout: {
                name: formState.name,
                workoutType: formState.workoutType,
                timerType: formState.timerType,
                description: formState.description,
                equipment: formState.equipment,
              },
            },
          });
        }}
      >
        <div>
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Workout name"
          />
          <input
            value={formState.workoutType}
            onChange={(e) =>
              setFormState({
                ...formState,
                workoutType: e.target.value,
              })
            }
            type="text"
            placeholder="Set workout type"
          />
          <input
            value={formState.timerType}
            onChange={(e) =>
              setFormState({
                ...formState,
                timerType: e.target.value,
              })
            }
            type="text"
            placeholder="Set workout timer type"
          />
          <input
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text"
            placeholder="Give some recipe"
          />

          <input
            value={formState.equipment}
            onChange={(e) =>
              setFormState({
                ...formState,
                equipment: e.target.value,
              })
            }
            type="text"
            placeholder="What equipment ypu will need"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
