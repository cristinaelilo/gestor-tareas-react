import TaskItem from './TaskItem'

function TaskList({ tareas }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          titulo={tarea.titulo}
          completada={tarea.completada}
        />
      ))}
    </ul>
  )
}

export default TaskList
