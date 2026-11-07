
import { useState } from 'react'

function TaskItem({ id, titulo, completada, onEditar, onCambiarEstado }) {
  const [editando, setEditando] = useState(false)
  const [nuevoTitulo, setNuevoTitulo] = useState(titulo)
  const [guardando, setGuardando] = useState(false)

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

  const cambiarEstado = async () => {
    setGuardando(true)

    try {
      await onCambiarEstado(id)
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
            Guardar
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
            {completada ? 'Marcar como pendiente' : 'Marcar como hecha'}
          </button>
        </>
      )}
    </li>
  )
}

export default TaskItem
