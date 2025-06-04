import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionsTypes, type TaskActionsModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionsModel
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsReamaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsReamaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsReamaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionsTypes.INTERRUPT_TASK: {

      return {
        ...state,
        activeTask: null,
        secondsReamaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }

    case TaskActionsTypes.RESET_STATE: {
      return state;
    }

    default:
      break;
  }

  // Sempre deve retornar o estado, seja atualizado ou o estado atual
  return state;
}
