
import "./styles/theme.css";
import "./styles/global.css";


import { AboutPomodoro } from "./pages/AboutPomodoro";



export function App() {
  return <AboutPomodoro />
}

// export default App;

// Podemos exportar de outras formas também :

// export { App };

// Logo se no main eu nomear minha importação com outro nome vai dar erro!
//  È obrigatorio que seja assim : import { App } from './App'

// Outra forma mais rapida e pratica que podemos fazer e exportar a função logo :
//  export function...
