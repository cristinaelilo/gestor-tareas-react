
import TaskItem from './TaskItem'

function TaskList({ tareas, onEditar, onCambiarEstado }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          id={tarea.id}
          titulo={tarea.titulo}
          completada={tarea.completada}
          onEditar={onEditar}
          onCambiarEstado={onCambiarEstado}
        />
      ))}
    </ul>
  )
}

export default TaskList
