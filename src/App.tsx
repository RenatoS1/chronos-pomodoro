
import "./styles/theme.css";
import "./styles/global.css";


import { Home } from "./pages/Home";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";

/*

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsReamaining: number; 
    formattedSecondsRemaining: string; 
    activeTask: TaskModel | null; 
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};
*/


const initialState: TaskStateModel = {
  tasks: [],
  secondsReamaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
}


export function App() {

  const [state, setState] = useState(initialState);

  console.log('APP', state);
  


  return <Home state={state} setState={setState}  />
}

// export default App;

// Podemos exportar de outras formas também :

// export { App };

// Logo se no main eu nomear minha importação com outro nome vai dar erro!
//  È obrigatorio que seja assim : import { App } from './App'

// Outra forma mais rapida e pratica que podemos fazer e exportar a função logo :
//  export function...
