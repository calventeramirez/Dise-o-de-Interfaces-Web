import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import TercerComponente from './componentes/TercerComponente';

function App() {
  const ficha_deportiva = {
    altura: "174cm",
    peso: "82Kg",
    alergias: "Ninguna"
  }

  let fecha = new Date();
  const anio = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Mi primer proyecto en React
        </h1>
        <PrimerComponente nombre = "PJ" apellidos = "CR" ficha={ficha_deportiva}></PrimerComponente>
      </header>
      <SegundoComponente></SegundoComponente>
      
      <TercerComponente  year = {anio}></TercerComponente>
    </div>
  );
}

export default App;
