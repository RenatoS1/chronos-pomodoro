import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import type { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps ) {

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:34"
      }
    })
  }




  return (
    <form className="form" action="">

      <div>
        <button type="button" onClick={handleClick}>
          Clicar
        </button>
      </div>



      <div className="formRow">
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="task:"
          placeholder="Digite Algo..."
        />
      </div>

      <div className="formRow">
        <p>O proximo intervalo é de {state.config.workTime}.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
