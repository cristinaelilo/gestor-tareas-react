
import { useState } from 'react'

function TaskItem({ id, titulo, completada, onEditar }) {
  const [editando, setEditando] = useState(false)
  const [nuevoTitulo, setNuevoTitulo] = useState(titulo)
  const [guardando, setGuardando] = useState(false)

  const guardarCambios = async () => {
    console.log('Botón Guardar presionado:', id, nuevoTitulo)

    const texto = nuevoTitulo.trim()

    if (!texto) {
      alert('Escribe un título para la tarea')
      return
    }

    if (typeof onEditar !== 'function') {
      console.error('No se recibió la función onEditar')
      return
    }

    setGuardando(true)

    try {
      const resultado = await onEditar(id, texto)

      if (resultado) {
        setEditando(false)
      }
    } catch (error) {
      console.error('Error al guardar:', error)
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

          <span>{completada ? 'Hecha' : 'Pendiente'}</span>

          <button
            type="button"
            onClick={() => {
              setNuevoTitulo(titulo)
              setEditando(true)
            }}
          >
            Editar
          </button>

          <button type="button">
            Marcar como hecha
          </button>
        </>
      )}
    </li>
  )
}

export default TaskItem
