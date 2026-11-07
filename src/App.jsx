import TaskItem from './components/TaskItem'

function App() {
  return (
    <div>
      <h1>Gestor de tareas del curso</h1>
      <ul>
        <TaskItem titulo="Leer documentación de React" completada={false} />
        <TaskItem titulo="Crear el repositorio" completada={true} />
        <TaskItem titulo="Hacer el componente TaskItem" completada={false} />
      </ul>
    </div>
  )
}

export default App
