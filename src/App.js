import './App.css';
import LogoAgenda from './imagenes/logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
        <img
        className='logo-agenda'
        src={LogoAgenda}
        alt='Logo agenda'
        />

      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />

      </div>
      
    </div>
  );
}

export default App;
