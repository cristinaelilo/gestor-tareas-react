import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import './App.css'

const tareas = [
  { id: 1, titulo: 'Leer documentación de React', completada: false },
  { id: 2, titulo: 'Crear el repositorio', completada: true },
  { id: 3, titulo: 'Hacer el componente TaskItem', completada: false },
]

function App() {
  const [filtro, setFiltro] = useState('todas')

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'pendientes') return !tarea.completada
    if (filtro === 'hechas') return tarea.completada
    return true
  })

  return (
    <div>
      <h1>Gestor de tareas del curso</h1>
      <TaskFilter filtroActual={filtro} onCambiarFiltro={setFiltro} />
      <TaskList tareas={tareasFiltradas} />
    </div>
  )
}

export default App
