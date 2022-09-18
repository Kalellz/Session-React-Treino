import '../App.scss';
import imagem from './image.svg'

function App(props) {
  return (
    <main className="Componente-1">
        <div className={props.DisplayPrincipal}>
            <h1>Seção {props.numero}</h1>
            <div className={props.DisplaySecundario}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.</p>
                <img src={imagem}/>
            </div>
        </div>
    </main>
  );
}

export default App;
