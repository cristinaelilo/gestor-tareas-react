
import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import { obtenerTareas } from './services/tareasApi'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [filtro, setFiltro] = useState('todas')

  useEffect(() => {
    obtenerTareas()
      .then((datos) => setTareas(datos))
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false))
  }, [])

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'pendientes') return !tarea.completada
    if (filtro === 'hechas') return tarea.completada
    return true
  })

  if (cargando) {
    return <p>Cargando tareas...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>Gestor de tareas del curso</h1>

      <TaskFilter
        filtroActual={filtro}
        onCambiarFiltro={setFiltro}
      />

      <TaskList tareas={tareasFiltradas} />
    </div>
  )
}

export default App
