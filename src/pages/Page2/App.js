import './App.scss';
import Componente from './Componente/index.js';

function App() {
  return (
    <main className="Page-Componentes">
        <Componente numero="01" DisplaySecundario="Page-Componentes-Display-Secundario-1"/>
        <Componente numero="01" DisplaySecundario="Page-Componentes-Display-Secundario-2"/>
        <Componente numero="01" DisplayPrincipal="Page-Componentes-Display-Principal-Center"/>
    </main>
  );
}

export default App;
