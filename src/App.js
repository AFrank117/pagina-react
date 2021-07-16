import logo from './logo.svg';
import './App.css';
import C01componente from './Components/C01componente';
import C02contador from './Components/C02contador';

function App() {
  return (
    <div>
      <h4>Sitio web con React</h4>
      <C01componente></C01componente>
      <hr/>
      <C02contador></C02contador>
    </div>
  );
}
export default App;
