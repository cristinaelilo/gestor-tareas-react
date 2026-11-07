function TaskFilter({ filtroActual, onCambiarFiltro }) {
  return (
    <div className="task-filter">
      <button
        type="button"
        className={filtroActual === 'todas' ? 'activo' : ''}
        onClick={() => onCambiarFiltro('todas')}
      >
        Todas
      </button>
      <button
        type="button"
        className={filtroActual === 'pendientes' ? 'activo' : ''}
        onClick={() => onCambiarFiltro('pendientes')}
      >
        Pendientes
      </button>
      <button
        type="button"
        className={filtroActual === 'hechas' ? 'activo' : ''}
        onClick={() => onCambiarFiltro('hechas')}
      >
        Hechas
      </button>
    </div>
  )
}

export default TaskFilter