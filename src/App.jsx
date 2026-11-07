import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Listado from './pages/Listado';
import Detalle from './pages/Detalle';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
        <Link to="/">Ir al Listado</Link> | <Link to="/detalle/1">Ver Detalle de prueba</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Listado />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;