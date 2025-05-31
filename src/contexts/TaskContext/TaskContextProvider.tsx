//import { useEffect, useState } from "react";
import { useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, setState] = useState(initialTaskState);

  const [numero, dispatch] = useReducer((state, action) => {
    console.log(state, action);


    switch (action) {
      case 'INCREMENT':
        return state + 1;
        break;

      case 'DECREMENT':
        return state - 1;
        break;

      case 'INITIAL_STATE':
        return state = 0;
        break;

    }
    
    return state;
  }, 0)

  // useEffect(() => {
  //   console.log(state);
    
  // }, [state])


  return (
    <TaskContext.Provider value={{ state, setState }}>
      <h1>O número é : {numero}</h1>
      <button type="button" onClick={() => dispatch('INCREMENT')}>
        Incrementar</button>
      <button type="button" onClick={() => dispatch('DECREMENT')}>
        Decrementar</button>
      <button type="button" onClick={() => dispatch('INITIAL_STATE')}>
        Zerar</button>
    </TaskContext.Provider>
  );
}
