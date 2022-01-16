import logo from './logo.svg';
import TotalProductos from './components/TotalDeProductos';
import UltimoProducto from './components/UltimoProductoCreado'
import UltimoUsuario from './components/UltimoUsuarioCreado'
import TotalUsus from './components/TotalUsuarios'
import ListadoProductos from './components/ListadoDeProductos'
import './App.css';

function App() {
  return (
    <div className="App">
         
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TotalProductos />
        <UltimoProducto />
        <TotalUsus />
        <UltimoUsuario />
        <ListadoProductos />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
