import type { TaskStateModel } from "./TaskStateModel";


export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null; // Quando o timer chega ao final eu coloco o completeDate, más se a pessoa interromper a task eu vou setar como nullo!
    interruptDate: number | null; // Quando a task for interrompida eu coloco essa date de interropido e eu não coloco completeDate
    type: keyof TaskStateModel['config'];
}