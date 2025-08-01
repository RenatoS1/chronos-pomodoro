import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";


// useReducer <- hook do React que recebe um reducer e um estado inicial

// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado

// state <- o estado atual

// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload

// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)

// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado
export enum TaskActionsTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}
/*
export type TaskActionsModel =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.RESET_STATE;
    };

    */
// Ou podemos fazer :

// sem payload
export type TaskActionsWithPayload =
  | { type: TaskActionsTypes.START_TASK;
      payload: TaskModel
    }
  | {
    type: TaskActionsTypes.COUNT_DOWN;
    payload: { secondsRemaining: number};
    }
  | {
    type: TaskActionsTypes.CHANGE_SETTINGS;
    payload: TaskStateModel['config'];
    };

// com payload
export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.RESET_STATE;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsTypes.COMPLETE_TASK;
    };

export type TaskActionsModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
