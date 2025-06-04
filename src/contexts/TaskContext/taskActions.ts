import type { TaskModel } from "../../models/TaskModel";

// useReducer <- hook do React que recebe um reducer e um estado inicial

// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado

// state <- o estado atual

// action <a ação disparada, geralmente é um objeto com type e (opcionalmente) payload

// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)

// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado
export enum TaskActionsTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
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
export type TaskActionsWithPayload = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
};

// com payload
export type TaskActionsWithoutPayload =
  | {
      type: TaskActionsTypes.RESET_STATE;
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    };

export type TaskActionsModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
