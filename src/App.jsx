import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskForm from './components/TaskForm';
import { useTareas } from './context/TareasContext';
import {
  obtenerTareas,
  crearTarea,
  editarTarea,
  eliminarTarea
} from './services/tareasApi';
import './App.css';

import Detalle from './pages/Detalle';

function App() {
  const {
    tareas, setTareas, cargando, setCargando, guardando, setGuardando,
    error, setError, errorFormulario, setErrorFormulario, filtro, setFiltro
  } = useTareas();

  useEffect(() => {
    obtenerTareas()
      .then((datos) => setTareas(datos))
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [setTareas, setError, setCargando]);

  const manejarCrear = async (titulo) => {
    setGuardando(true);
    setErrorFormulario(null);
    try {
      const nuevaTarea = await crearTarea(titulo);
      setTareas((anteriores) => [...anteriores, { ...nuevaTarea, id: crypto.randomUUID() }]);
      return true;
    } catch (e) {
      setErrorFormulario(e.message);
      return false;
    } finally {
      setGuardando(false);
    }
  };

  const manejarEditar = async (id, nuevoTitulo) => {
    setErrorFormulario(null);
    try {
      const tareaActual = tareas.find((tarea) => tarea.id === id);
      if (!tareaActual) return false;
      if (typeof id === 'number' && id <= 200) {
        await editarTarea(id, nuevoTitulo, tareaActual.completada);
      }
      setTareas((anteriores) =>
        anteriores.map((tarea) => (tarea.id === id ? { ...tarea, titulo: nuevoTitulo } : tarea))
      );
      return true;
    } catch (e) {
      setErrorFormulario(e.message);
      return false;
    }
  };

  const manejarCambiarEstado = async (id) => {
    setErrorFormulario(null);
    try {
      const tareaActual = tareas.find((tarea) => tarea.id === id);
      if (!tareaActual) return false;
      const nuevoEstado = !tareaActual.completada;
      if (typeof id === 'number' && id <= 200) {
        await editarTarea(id, tareaActual.titulo, nuevoEstado);
      }
      setTareas((anteriores) =>
        anteriores.map((tarea) => (tarea.id === id ? { ...tarea, completada: nuevoEstado } : tarea))
      );
      return true;
    } catch (e) {
      setErrorFormulario(e.message);
      return false;
    }
  };

  const manejarEliminar = async (id) => {
    setErrorFormulario(null);
    try {
      if (typeof id === 'number' && id <= 200) {
        await eliminarTarea(id);
      }
      setTareas((anteriores) => anteriores.filter((tarea) => tarea.id !== id));
      return true;
    } catch (e) {
      setErrorFormulario(e.message);
      return false;
    }
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'pendientes') return !tarea.completada;
    if (filtro === 'hechas') return tarea.completada;
    return true;
  });

  const VistaPrincipal = () => {
    if (cargando) return <p>Cargando tareas...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1>Gestor de tareas del curso</h1>
        <TaskForm onCrear={manejarCrear} guardando={guardando} />
        {errorFormulario && <p role="alert">Error: {errorFormulario}</p>}
        <TaskFilter filtroActual={filtro} onCambiarFiltro={setFiltro} />
        <TaskList
          tareas={tareasFiltradas}
          onEditar={manejarEditar}
          onCambiarEstado={manejarCambiarEstado}
          onEliminar={manejarEliminar}
        />
      </div>
    );
  };

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;