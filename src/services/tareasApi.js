
const URL = 'https://jsonplaceholder.typicode.com/todos'

export async function obtenerTareas() {
  const respuesta = await fetch(`${URL}?_limit=10`)

  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar las tareas')
  }

  const datos = await respuesta.json()

  return datos.map((tarea) => ({
    id: tarea.id,
    titulo: tarea.title,
    completada: tarea.completed,
  }))
}

export async function crearTarea(titulo) {
  const respuesta = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: titulo,
      completed: false,
      userId: 1,
    }),
  })

  if (!respuesta.ok) {
    throw new Error('No se pudo crear la tarea')
  }

  const datos = await respuesta.json()

  return {
    id: datos.id,
    titulo: datos.title,
    completada: datos.completed,
  }
}

export async function editarTarea(id, titulo, completada) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      title: titulo,
      completed: completada,
      userId: 1,
    }),
  })

  if (!respuesta.ok) {
    throw new Error('No se pudo editar la tarea')
  }

  const datos = await respuesta.json()

  return {
    id: datos.id,
    titulo: datos.title,
    completada: datos.completed,
  }
}

export async function eliminarTarea(id) {
  const respuesta = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })

  if (!respuesta.ok) {
    throw new Error('No se pudo eliminar la tarea')
  }

  return true
}
