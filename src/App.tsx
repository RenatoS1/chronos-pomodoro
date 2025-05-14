import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';


export function App() {

  return (
    <>
    
      <Heading />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit
        iste ut dolores tempora atque iure sunt tempore eos culpa sed quisquam,
        nostrum exercitationem autem porro, ipsa perferendis voluptas
        blanditiis.
      </p>
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