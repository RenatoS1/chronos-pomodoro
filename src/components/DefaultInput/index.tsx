//import styles from "./styles.module.css";

// Definindo o tipo das propriedades (props) que o componente DefaultInput vai receber
type DefaultInputProps = {
  // id é obrigatório e deve ser uma string
  id: string;

  // Aqui você poderia definir o type manualmente, por exemplo:
  // type: 'text' | 'number' | 'search'; // Union type para limitar os valores possíveis
  // Mas vamos aproveitar o React.ComponentProps para herdar todas as props padrão do <input>
} & React.ComponentProps<'input'>;
// O & (intersection) combina o objeto { id: string } com todas as props que um <input> aceita
// Isso significa que DefaultInputProps terá id + todas as props possíveis de um input HTML (ex: type, placeholder, onChange, etc)

// Componente funcional DefaultInput que recebe props do tipo DefaultInputProps
export function DefaultInput({ id, type, ...rest }: DefaultInputProps) {
  // Desestruturamos id e type das props
  // O ...rest pega todas as outras props que foram passadas e que não foram desestruturadas,
  // para que possamos passar elas adiante para o input (ex: placeholder, onChange, value, etc)

  return (
    <>
      {/* 
        label com htmlFor = id do input para associar o label ao input
        Isso melhora acessibilidade e faz com que clicar no label foque no input
      */}
      <label htmlFor={id}>task</label>

      {/* 
        input recebe o id, o type e todas as outras props que vieram no rest
        Assim o componente é flexível e reutilizável para vários tipos de input
      */}
      <input id={id} type={type} {...rest} />
    </>
  );
}

