import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionsTypes, type TaskActionsModel } from "./taskActions";

export function taskReducer(
    state: TaskStateModel,
    action: TaskActionsModel
): TaskStateModel {

    switch (action.type) {
        case TaskActionsTypes.START_TASK: {
            return state;
        }
            
        case TaskActionsTypes.INTERRUPT_TASK: {
            return state;
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