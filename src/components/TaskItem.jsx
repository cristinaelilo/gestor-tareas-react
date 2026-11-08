
import { Link } from 'react-router-dom';
import { useState } from 'react'

function TaskItem({
  id,
  titulo,
  completada,
  onEditar,
  onCambiarEstado,
  onEliminar
}) {
  const [editando, setEditando] = useState(false)
  const [nuevoTitulo, setNuevoTitulo] = useState(titulo)
  const [guardando, setGuardando] = useState(false)

  // Guardar cambios del título
  const guardarCambios = async () => {
    const texto = nuevoTitulo.trim()

    if (!texto) return

    setGuardando(true)

    try {
      const correcto = await onEditar(id, texto)

      if (correcto) {
        setEditando(false)
      }
    } finally {
      setGuardando(false)
    }
  }

  // Cambiar el estado de la tarea
  const cambiarEstado = async () => {
    setGuardando(true)

    try {
      await onCambiarEstado(id)
    } finally {
      setGuardando(false)
    }
  }

  // Eliminar la tarea
  const eliminar = async () => {
    const confirmar = window.confirm(
      '¿Estás seguro de que deseas eliminar esta tarea?'
    )

    if (!confirmar) return

    setGuardando(true)

    try {
      await onEliminar(id)
    } finally {
      setGuardando(false)
    }
  }

  return (
    <li className="task-item">
      {editando ? (
        <>
          <input
            type="text"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            disabled={guardando}
          />

          <button
            type="button"
            onClick={guardarCambios}
            disabled={guardando}
          >
            {guardando ? 'Guardando...' : 'Guardar'}
          </button>

          <button
            type="button"
            onClick={() => {
              setNuevoTitulo(titulo)
              setEditando(false)
            }}
            disabled={guardando}
          >
            Cancelar
          </button>
        </>
      ) : (
        <>
          <span className={completada ? 'tachado' : ''}>
            {titulo}
          </span>

          <span>
            {completada ? 'Hecha' : 'Pendiente'}
          </span>

          <button
            type="button"
            onClick={() => {
              setNuevoTitulo(titulo)
              setEditando(true)
            }}
            disabled={guardando}
          >
            Editar
          </button>

          <button
            type="button"
            onClick={cambiarEstado}
            disabled={guardando}
          >
            {completada
              ? 'Marcar como pendiente'
              : 'Marcar como hecha'}
          </button>

          <button
            type="button"
            onClick={eliminar}
            disabled={guardando}
          >
            Eliminar
          </button>

          <Link
            to={`/detalle/${id}`}
            style={{ marginLeft: '5px', padding: '3px 8px', border: '1px solid #ccc', textDecoration: 'none', color: '#333', background: '#f8f9fa', borderRadius: '4px', fontSize: '13px' }}
          >
            Ver detalles
          </Link>
        </>
      )}
    </li>
  )
}

export default TaskItem
