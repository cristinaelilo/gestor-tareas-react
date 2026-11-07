
import { createContext, useContext, useState } from 'react'

const TareasContext = createContext(null)

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [errorFormulario, setErrorFormulario] = useState(null)
  const [guardando, setGuardando] = useState(false)
  const [filtro, setFiltro] = useState('todas')

  return (
    <TareasContext.Provider
      value={{
        tareas,
        setTareas,
        cargando,
        setCargando,
        error,
        setError,
        errorFormulario,
        setErrorFormulario,
        guardando,
        setGuardando,
        filtro,
        setFiltro
      }}
    >
      {children}
    </TareasContext.Provider>
  )
}

export function useTareas() {
  const contexto = useContext(TareasContext)

  if (!contexto) {
    throw new Error('useTareas debe usarse dentro de TareasProvider')
  }

  return contexto
}
