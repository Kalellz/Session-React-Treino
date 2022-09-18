import './App.scss';
import Componente from './Componente/index.jsx'

function App() {
  return (
    <main className="Page-Componentes2">
      <div className='PC-Div'>
        <Componente hobby="lutar" nome="Bruno" idade="33" Nascimento="1989"/>
        <Componente hobby="beijar" nome="Bruno" idade="33" Nascimento="1989"/>
      </div>
      <div className="PC-Div">
        <Componente hobby="namorar" nome="Bruno" idade="33" Nascimento="1989"/>
        <Componente hobby="codar" nome="Kalel" idade="15" Nascimento="2007"/>
      </div>
    </main>
  );
}

export default App;
