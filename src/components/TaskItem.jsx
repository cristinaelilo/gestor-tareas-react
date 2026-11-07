function TaskItem({ titulo, completada }) {
  return (
    <li className="task-item">
      <span className={completada ? 'tachado' : ''}>{titulo}</span>
      <span>{completada ? 'Hecha' : 'Pendiente'}</span>
      <button type="button">Marcar como hecha</button>
    </li>
  )
}

export default TaskItem