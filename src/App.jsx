
import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import TaskForm from './components/TaskForm'
import {
  obtenerTareas,
  crearTarea,
  editarTarea
} from './services/tareasApi'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState(null)
  const [errorFormulario, setErrorFormulario] = useState(null)
  const [filtro, setFiltro] = useState('todas')

  // Obtener tareas de la API
  useEffect(() => {
    obtenerTareas()
      .then((datos) => {
        setTareas(datos)
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  // Crear una nueva tarea
  const manejarCrear = async (titulo) => {
    setGuardando(true)
    setErrorFormulario(null)

    try {
      const nuevaTarea = await crearTarea(titulo)

      setTareas((anteriores) => [
        ...anteriores,
        {
          ...nuevaTarea,
          id: crypto.randomUUID()
        }
      ])

      return true
    } catch (e) {
      setErrorFormulario(e.message)
      return false
    } finally {
      setGuardando(false)
    }
  }

  // Editar el título de una tarea
  const manejarEditar = async (id, nuevoTitulo) => {
    setErrorFormulario(null)

    try {
      const tareaActual = tareas.find(
        (tarea) => tarea.id === id
      )

      if (!tareaActual) return false

      if (typeof id === 'number' && id <= 200) {
        await editarTarea(
          id,
          nuevoTitulo,
          tareaActual.completada
        )
      }

      setTareas((anteriores) =>
        anteriores.map((tarea) =>
          tarea.id === id
            ? { ...tarea, titulo: nuevoTitulo }
            : tarea
        )
      )

      return true
    } catch (e) {
      setErrorFormulario(e.message)
      return false
    }
  }

  // Cambiar una tarea a hecha o pendiente
  const manejarCambiarEstado = async (id) => {
    setErrorFormulario(null)

    try {
      const tareaActual = tareas.find(
        (tarea) => tarea.id === id
      )

      if (!tareaActual) return false

      const nuevoEstado = !tareaActual.completada

      if (typeof id === 'number' && id <= 200) {
        await editarTarea(
          id,
          tareaActual.titulo,
          nuevoEstado
        )
      }

      setTareas((anteriores) =>
        anteriores.map((tarea) =>
          tarea.id === id
            ? { ...tarea, completada: nuevoEstado }
            : tarea
        )
      )

      return true
    } catch (e) {
      setErrorFormulario(e.message)
      return false
    }
  }

  // Filtrar las tareas
  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'pendientes') {
      return !tarea.completada
    }

    if (filtro === 'hechas') {
      return tarea.completada
    }

    return true
  })

  // Mostrar mensaje mientras cargan las tareas
  if (cargando) {
    return <p>Cargando tareas...</p>
  }

  // Mostrar error si falla la API
  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>Gestor de tareas del curso</h1>

      <TaskForm
        onCrear={manejarCrear}
        guardando={guardando}
      />

      {errorFormulario && (
        <p role="alert">
          Error: {errorFormulario}
        </p>
      )}

      <TaskFilter
        filtroActual={filtro}
        onCambiarFiltro={setFiltro}
      />

      <TaskList
        tareas={tareasFiltradas}
        onEditar={manejarEditar}
        onCambiarEstado={manejarCambiarEstado}
      />
    </div>
  )
}

export default App
