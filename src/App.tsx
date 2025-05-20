import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';



export function App() {

  const [numero, setNumero] = useState(0);

  function handleClick() {
      setNumero(prevState => prevState + 1);
  }

  return (
    <>
      <Heading>
        Número: <span id='numero'>{numero}</span>
        <button onClick={handleClick} type="button">Aumenta</button>
      </Heading>






      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className="formRow"> 
            <DefaultInput 
              id='meuInput' 
              type='text' 
              labelText={numero.toString()}
              placeholder='Digite Algo...'

            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
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