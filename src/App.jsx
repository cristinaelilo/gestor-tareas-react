
import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import TaskForm from './components/TaskForm'
import { obtenerTareas, crearTarea } from './services/tareasApi'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState(null)
  const [errorFormulario, setErrorFormulario] = useState(null)
  const [filtro, setFiltro] = useState('todas')

  useEffect(() => {
    obtenerTareas()
      .then((datos) => setTareas(datos))
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false))
  }, [])

  const manejarCrear = async (titulo) => {
    setGuardando(true)
    setErrorFormulario(null)

    try {
      const nuevaTarea = await crearTarea(titulo)

      setTareas((anteriores) => [
        ...anteriores,
        { ...nuevaTarea, id: crypto.randomUUID() },
      ])

      return true
    } catch (e) {
      setErrorFormulario(e.message)
      return false
    } finally {
      setGuardando(false)
    }
  }

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'pendientes') return !tarea.completada
    if (filtro === 'hechas') return tarea.completada
    return true
  })

  if (cargando) return <p>Cargando tareas...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Gestor de tareas del curso</h1>

      <TaskForm
        onCrear={manejarCrear}
        guardando={guardando}
      />

      {errorFormulario && (
        <p role="alert">Error: {errorFormulario}</p>
      )}

      <TaskFilter
        filtroActual={filtro}
        onCambiarFiltro={setFiltro}
      />

      <TaskList tareas={tareasFiltradas} />
    </div>
  )
}

export default App
