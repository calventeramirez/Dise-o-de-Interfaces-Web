import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';

function App() {
  const ficha_deportiva = {
    altura: "174cm",
    peso: "82Kg",
    alergias: "Ninguna"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Mi primer proyecto en React
        </h1>
        
      </header>
      <PrimerComponente nombre = "PJ" apellidos = "CR" ficha={ficha_deportiva}></PrimerComponente>
    </div>
  );
}

export default App;
