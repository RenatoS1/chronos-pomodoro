import './styles/theme.css';
import './styles/global.css';

import { TimerIcon } from 'lucide-react';
import { Contador } from './components/Contador';

export function App() {

  return (
    <>
      <div className="container-fluid">

        <div className="container">

          <div className="content">

            <section className="timeIcon">
              <TimerIcon size={60} />
            </section>

            <section className="title">Chronos</section>

            <section> <Contador /> </section>

          </div>

        </div>

      </div>
    </>
  );
}


// export default App;

// Podemos exportar de outras formas também : 

// export { App };

// Logo se no main eu nomear minha importação com outro nome vai dar erro!
//  È obrigatorio que seja assim : import { App } from './App'


// Outra forma mais rapida e pratica que podemos fazer e exportar a função logo :
//  export function...