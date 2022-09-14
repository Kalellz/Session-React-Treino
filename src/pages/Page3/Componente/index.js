import '../App.scss';
import Icon from './Icon.svg'

function App(props) {
  return (
    <main className="Componente-2">
        <div className="Comp2-Div1">
          <img src={Icon}/>
          <h1>{props.nome}</h1>
        </div>
        <div className="Comp2-Div-Text">
          <h1>Idade</h1> <p>{props.idade}</p>
        </div>
        <div className="Comp2-Div-Text">
          <h1>Nascimento</h1> <p>{props.idade}</p>
        </div>
        <div>
          <button>Hobby</button>
        </div>
    </main>
  );
}

export default App;
