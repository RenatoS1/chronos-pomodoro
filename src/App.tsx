import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { MainRouter } from "./routers/MainRouter";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}

// export default App;

// Podemos exportar de outras formas também :

// export { App };

// Logo se no main eu nomear minha importação com outro nome vai dar erro!
//  È obrigatorio que seja assim : import { App } from './App'

// Outra forma mais rapida e pratica que podemos fazer e exportar a função logo :
//  export function...
