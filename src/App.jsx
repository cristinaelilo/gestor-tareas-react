import TaskList from './components/TaskList'
import './App.css'

const tareas = [
  { id: 1, titulo: 'Leer documentación de React', completada: false },
  { id: 2, titulo: 'Crear el repositorio', completada: true },
  { id: 3, titulo: 'Hacer el componente TaskItem', completada: false },
]

function App() {
  return (
    <div>
      <h1>Gestor de tareas del curso</h1>
      <TaskList tareas={tareas} />
    </div>
  )
}

export default App
