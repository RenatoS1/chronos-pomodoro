import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionsTypes } from "../../contexts/TaskContext/taskActions";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por <b>{state.config.workTime}minutos</b></span>,
    shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}minutos</b></span>,
    longBreakTime: <span>Descanso longo</span>

  };
  const tipsForNoActiveTask = {
    workTime: <span>O Próximo ciclo é de <b>{state.config.workTime}minutos</b></span>,
    shortBreakTime: <span>O Próximo ciclo é de <b>{state.config.shortBreakTime}minutos</b></span>,
    longBreakTime: <span>O Próximo descanso será longo</span>

  };



  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert("Digite o nome da tarefa !");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };


    dispatch({type: TaskActionsTypes.START_TASK, payload: newTask})
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK})
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="task:"
          placeholder="Digite Algo..."
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
        {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}
      <div className="formRow">

{/* Sem tarefa ativa: Mostra botão para iniciar.*/}
        {!state.activeTask && (
          <DefaultButton
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            key="botao_submit"
          />
        )}

{/* Com tarefa ativa: Mostra botão para interromper.*/}
        {!!state.activeTask && (
          <DefaultButton
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="botao_button"
          />
        )}
      </div>
    </form>
  );
}
