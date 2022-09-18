import './App.scss';

function App() {
  return (
    <main className="Page-Eventos">
        <div className='PE-Div-Principal'>
          <div>
            <h1>
              Olá, seja bem-vindo!
            </h1>
          </div>
          <div className='PE-div-Inputs-1'>
            <input type="text" placeholder='Digite aqui'/>
            <select>
              <option>Opção 1</option>
              <option>Opção 2</option>
            </select>
           </div>
          <div className='PE-div-Inputs-2'>
            <div className='PE-div-Inputs-2-Radio'>
              <input type="radio" name='PE-Input-Radio'/> Opção 1
              <input type="radio" name='PE-Input-Radio' className='PE-Input-Radio2'/> Opção 2
            </div>
            <div className='PE-div-Inputs-2-Checkbox'>
              <input type="checkbox"/> Opção 1
              <input type="checkbox" className='PE-Input-Checkbox2'/> Opção 2
            </div>
          </div>
          <div className='PE-div-Button'>
            <button>Okay</button>
          </div>
        </div>
    </main>
  );
}

export default App;
