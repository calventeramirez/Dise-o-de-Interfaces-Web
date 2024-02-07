import Superior from './Superior';
import BarraLateral from './BarraLateral';
import Articulos from './Articulos';

export default function Inicio() {
  return (
    <main className="wrap">
        <Superior/>
        <div className='cuerpo'>
            <BarraLateral/>
            <Articulos/>
        </div>
    </main>
  )
}
