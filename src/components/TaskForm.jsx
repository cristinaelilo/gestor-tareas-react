
import { useState } from 'react'

function TaskForm({ onCrear, guardando }) {
  const [titulo, setTitulo] = useState('')

  const manejarEnvio = async (e) => {
    e.preventDefault()

    const texto = titulo.trim()

    if (!texto) return

    const creada = await onCrear(texto)

    if (creada) {
      setTitulo('')
    }
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Escribe una nueva tarea"
        disabled={guardando}
        required
      />

      <button type="submit" disabled={guardando}>
        {guardando ? 'Guardando...' : 'Agregar tarea'}
      </button>
    </form>
  )
}

export default TaskForm
