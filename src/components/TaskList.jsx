
import TaskItem from './TaskItem'

function TaskList({ tareas, onEditar, onCambiarEstado, onEliminar }) {
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
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}

export default TaskList
