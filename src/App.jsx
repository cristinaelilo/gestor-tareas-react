
import { useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import TaskForm from './components/TaskForm'
import { useTareas } from './context/TareasContext'
import {
  obtenerTareas,
  crearTarea,
  editarTarea,
  eliminarTarea
} from './services/tareasApi'
import './App.css'

function App() {
  // Estados compartidos mediante Context API
  const {
    tareas,
    setTareas,
    cargando,
    setCargando,
    guardando,
    setGuardando,
    error,
    setError,
    errorFormulario,
    setErrorFormulario,
    filtro,
    setFiltro
  } = useTareas()

  // GET: obtener las tareas
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
  }, [setTareas, setError, setCargando])

  // POST: crear una tarea
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

  // PUT: editar una tarea
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

  // PUT: cambiar el estado de una tarea
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

  // DELETE: eliminar una tarea
  const manejarEliminar = async (id) => {
    setErrorFormulario(null)

    try {
      if (typeof id === 'number' && id <= 200) {
        await eliminarTarea(id)
      }

      setTareas((anteriores) =>
        anteriores.filter((tarea) => tarea.id !== id)
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

  if (cargando) {
    return <p>Cargando tareas...</p>
  }

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
        onEliminar={manejarEliminar}
      />
    </div>
  )
}

export default App
