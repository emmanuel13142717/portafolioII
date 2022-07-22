
import './App.css';
import {Empleos} from './componentes/Empleos.js';
function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
      <h1>Experiencia Laboral</h1>
      <Empleos 
      imagen="gho"
      nombre="Grupo Herradura Occidente"
      cargo="Analista Estadístico de Boleteras "
      descripcion=""
      />
      <Empleos 
      imagen="infotec"
      nombre="Infotec"
      cargo="Desarrollador JR"
      descripcion=""
      />
      </div>
    </div>
  );
}

export default App;
