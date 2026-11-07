# Gestor de tareas del curso – React

Práctica: **Desarrollo interactivo de aplicaciones (Parte 1)**
Framework investigado: **React**

## 1. Información del proyecto

Este proyecto consiste en desarrollar una aplicación web para gestionar las tareas de un curso. Permitirá registrar, consultar, editar, completar y eliminar tareas, además de filtrarlas según su estado.

La aplicación se desarrolla como parte de la práctica **Desarrollo interactivo de aplicaciones (Parte 1)**, cuyo objetivo es investigar y aprender el funcionamiento del framework React mediante la construcción de una aplicación funcional.

- **Repositorio:** https://github.com/cristinaelilo/gestor-tareas-react

### Integrantes

| Integrante | Responsabilidad principal |
|---|---|
| Cristina Loja (coordinadora) | Repositorio, estructura, componentes y estilos |
| Denisse Paredes | Estado global, consumo de API y CRUD |
| Brandon | Rutas, pruebas, despliegue y mediciones |

### Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| React | Librería utilizada para construir la interfaz de usuario. |
| Vite | Herramienta para crear y ejecutar el proyecto. |
| JavaScript | Lenguaje de programación. |
| HTML | Estructura de la aplicación. |
| CSS | Diseño y estilos. |
| Git | Control de versiones. |
| GitHub | Alojamiento del repositorio. |

## 2. Panorama de React (ficha técnica)

| Dato | Información |
|---|---|
| Origen | Creado por Jordan Walke en Facebook y liberado como código abierto en 2013. |
| Mantenedor | Meta y una comunidad de colaboradores. |
| Versión usada en el proyecto | Pendiente de registrar (campo `react` de `package.json`). |
| Licencia | MIT |
| Tipo | Librería para construir interfaces de usuario. |

React es una **librería** enfocada en la vista. A diferencia de un framework completo como Angular, no incluye por sí sola enrutador ni cliente HTTP, por lo que esas funciones se resuelven con librerías adicionales (por ejemplo, React Router).

## 3. Instalación y configuración

### 3.1. Requisitos previos

Antes de crear el proyecto, se verificó que Node.js, npm y Git estuvieran instalados en el equipo.

Versiones utilizadas:

| Herramienta | Versión |
|---|---|
| Node.js | v26.13.0 |
| npm | 11.20.0 |
| Git | 2.55.0 |
| create-vite (generador del proyecto) | 9.3.4 |
| Vite (servidor de desarrollo) | 8.3.6 |
| ESLint | 10.14.0 |

> `create-vite` y `Vite` son dos paquetes distintos: el primero genera el proyecto y el segundo lo ejecuta.

Para comprobar las versiones se utilizaron los siguientes comandos:

```bash
node -v
npm -v
git --version
```

![Versiones utilizadas](docs/evidencias/versiones.png)

### 3.2. Creación del proyecto

Se utilizó Vite para crear el proyecto con la plantilla de React. Desde la terminal de Visual Studio Code se ejecutó:

```bash
npm create vite@latest . -- --template react
```

Durante la configuración se seleccionó ESLint como herramienta para revisar el código, y se aceptó instalar las dependencias e iniciar el servidor de desarrollo.

Resultado del proceso:

- Se instalaron 143 paquetes en 19 segundos.
- Vite inició el servidor local en 4,48 segundos.
- La aplicación se visualizó en el navegador en `http://localhost:5173/`.

Comandos de uso habitual:

```bash
npm install     # instala las dependencias
npm run dev     # inicia el servidor de desarrollo
```

### 3.3. Resultado de la instalación

La instalación finalizó correctamente y se visualizó la página inicial de React y Vite en el navegador.

Esto permitió comprobar que el entorno de desarrollo estaba funcionando y que los cambios realizados en el código podían reflejarse automáticamente en el navegador mediante HMR (Hot Module Replacement).

### 3.4. Tiempo de configuración inicial

| Medición | Resultado |
|---|---|
| Inicio | Ejecución del comando `npm create vite@latest . -- --template react` |
| Finalización | Primera ejecución exitosa de la aplicación en `http://localhost:5173/` |
| Tiempo total | Aproximadamente 3 a 6 minutos |


### 3.5. Evidencias de instalación

- `01-instalacion-react.png`: creación e instalación del proyecto con Vite.

![Creación del proyecto](docs/evidencias/01-instalacion-react.png)

- `02-aplicacion-ejecutando.png`: aplicación inicial funcionando en el navegador.

![Visualización](docs/evidencias/02-aplicacion-ejecutando.png)

## 4. Estructura inicial del proyecto

El proyecto generado con Vite presenta una estructura organizada que separa los archivos principales de la aplicación, los estilos y los recursos estáticos.

```text
gestor-tareas-react/
├── docs/
│   └── evidencias/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

### 4.1. Descripción de los archivos principales

| Archivo o carpeta | Función |
|---|---|
| `docs/evidencias/` | Guarda las capturas del proceso de desarrollo. |
| `public/` | Guarda recursos estáticos que se utilizan directamente. |
| `src/` | Contiene el código fuente de la aplicación. |
| `src/assets/` | Almacena imágenes y otros recursos utilizados por los componentes. |
| `App.jsx` | Contiene el componente principal de React. |
| `App.css` | Contiene los estilos del componente principal. |
| `index.css` | Define los estilos generales de la aplicación. |
| `main.jsx` | Es el punto de entrada que renderiza la aplicación React. |
| `index.html` | Contiene el documento HTML principal. |
| `package.json` | Define las dependencias y los comandos del proyecto. |
| `vite.config.js` | Contiene la configuración de Vite. |
| `eslint.config.js` | Configura las reglas de revisión del código. |

## 5. Hola mundo explicado

### 5.1. Recorrido general

```text
index.html  →  main.jsx  →  App.jsx
(div root)     (createRoot)   (componente)
```

1. El navegador abre `index.html`, que contiene un `<div id="root"></div>` vacío.
2. La etiqueta `<script type="module" src="/src/main.jsx">` carga el archivo `main.jsx`.
3. `main.jsx` toma el `root` y renderiza dentro el componente `<App />`.
4. `App.jsx` devuelve el JSX que se convierte en lo que se ve en pantalla.

### 5.2. `index.html`

| Línea | Explicación |
|---|---|
| `<meta charset="UTF-8" />` | Define la codificación de caracteres para mostrar tildes y la ñ correctamente. |
| `<meta name="viewport" ...>` | Hace que la página se adapte al ancho del dispositivo, necesario para el diseño responsive. |
| `<title>` | Texto que aparece en la pestaña del navegador. |
| `<div id="root"></div>` | Contenedor vacío donde React dibuja la aplicación. |
| `<script type="module" src="/src/main.jsx">` | Carga el punto de entrada de la aplicación como módulo. Vite se encarga de traducir el JSX para el navegador. |

### 5.3. `main.jsx`

| Línea | Explicación |
|---|---|
| `import { StrictMode } from 'react'` | Importa `StrictMode`, una herramienta de React (import nombrado, va entre llaves). |
| `import { createRoot } from 'react-dom/client'` | Importa la función que conecta React con el navegador. Está en `react-dom` porque React maneja los componentes y `react-dom` los dibuja en la página. |
| `import './index.css'` | Carga los estilos globales. |
| `import App from './App.jsx'` | Importa el componente principal (import por defecto, sin llaves). |
| `createRoot(document.getElementById('root'))` | Busca el `div` con id `root` y crea ahí la raíz de la aplicación. |
| `.render(<StrictMode><App /></StrictMode>)` | Dibuja `App` dentro de la raíz. `StrictMode` no se ve en pantalla: en desarrollo ayuda a detectar errores. |

### 5.4. `App.jsx` (plantilla inicial de Vite)

La explicación corresponde al `App.jsx` que genera Vite. Luego se reemplazó por el código propio del proyecto, descrito en las secciones 6 y 7.

| Elemento | Explicación |
|---|---|
| `function App() { ... }` | Un componente es una función que devuelve JSX. Su nombre empieza con mayúscula. |
| `export default App` | Permite que `main.jsx` importe el componente. |
| `const [count, setCount] = useState(0)` | `useState` crea un estado. `count` es el valor actual, `setCount` es la función para cambiarlo y `0` es el valor inicial. |
| `return ( <> ... </> )` | Devuelve el JSX, una sintaxis parecida al HTML dentro de JavaScript. `<>...</>` es un fragment: agrupa elementos sin crear un `div` extra. |
| `className` | En JSX se usa `className` en lugar de `class`, porque `class` es una palabra reservada de JavaScript. |
| `{count}` | Las llaves insertan una expresión de JavaScript dentro del JSX. |
| `onClick={() => setCount((count) => count + 1)}` | Evento de clic. Se pasa una función que actualiza el estado; al cambiar el estado, React vuelve a dibujar el componente con el nuevo valor. |
| `import heroImg from './assets/hero.png'` | Importa una imagen para poder usarla en el JSX. |


## 6. Bloque 3: Componentes

Un componente en React es una función que recibe datos y devuelve JSX, es decir, la parte de la interfaz que se muestra. Permite dividir la aplicación en piezas pequeñas y reutilizables.

### 6.1. Componentes de la aplicación

| Componente | Función |
|---|---|
| `TaskItem` | Muestra una tarea: título, estado y botón. |
| `TaskList` | Recibe un arreglo de tareas y muestra un `TaskItem` por cada una. |
| `TaskFilter` | Muestra los botones Todas, Pendientes y Hechas. |

### 6.2. Componente reutilizable: `TaskItem`

```jsx
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
```

`TaskItem` se usó tres veces con datos distintos:

```jsx
<TaskItem titulo="Leer documentación de React" completada={false} />
<TaskItem titulo="Crear el repositorio" completada={true} />
<TaskItem titulo="Hacer el componente TaskItem" completada={false} />
```

![TaskItem usado tres veces](docs/evidencias/03-taskitem-reutilizado.png)

### 6.3. Temas del bloque

| Tema | Qué es y para qué sirve | Ejemplo propio |
|---|---|---|
| Componentes y JSX | Funciones que devuelven JSX, una sintaxis parecida al HTML dentro de JavaScript. | `TaskItem`, `TaskList` y `TaskFilter`. |
| Props | Datos que un componente recibe de quien lo usa. Permiten reutilizarlo con información distinta. | `TaskItem` recibe `titulo` y `completada`. |
| Renderizado condicional | Mostrar un contenido u otro según una condición. | `completada ? 'Hecha' : 'Pendiente'` y título tachado con la clase `tachado`. |
| Listas y `key` | Se recorre un arreglo con `.map()` para generar un componente por elemento. `key` identifica cada elemento. | `TaskList` usa `tareas.map(...)` con `key={tarea.id}`. |
| Eventos | Acciones del usuario, como un clic, que ejecutan una función. | `onClick={() => onCambiarFiltro('pendientes')}` en `TaskFilter`. |

### 6.4. Error encontrado: falta de `key`

Al crear `TaskList` sin la prop `key`, la consola mostró el error `Each child in a list should have a unique "key" prop`. Se solucionó agregando `key={tarea.id}` a cada `TaskItem`.

![Error de key en la consola](docs/evidencias/04-error-key.png)

## 7. Bloque 4: Estado y reactividad

### 7.1. Estado con `useState`

El estado es la información que un componente recuerda y que, al cambiar, hace que React vuelva a dibujar la pantalla. En `App.jsx` se guarda el filtro actual:

```jsx
const [filtro, setFiltro] = useState('todas')
```

`filtro` es el valor actual, `setFiltro` es la función para cambiarlo y `'todas'` es el valor inicial. Al llamar a `setFiltro`, React actualiza la interfaz.

### 7.2. Estado compartido entre dos componentes

El filtro lo cambia `TaskFilter` y lo necesita `TaskList`. Como ambos son hijos de `App`, el estado se guarda en `App` y se les pasa por props:

```jsx
function App() {
  const [filtro, setFiltro] = useState('todas')

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'pendientes') return !tarea.completada
    if (filtro === 'hechas') return tarea.completada
    return true
  })

  return (
    <div>
      <h1>Gestor de tareas del curso</h1>
      <TaskFilter filtroActual={filtro} onCambiarFiltro={setFiltro} />
      <TaskList tareas={tareasFiltradas} />
    </div>
  )
}
```

| Componente | Cómo participa |
|---|---|
| `App` | Guarda el estado `filtro` y calcula las tareas filtradas. |
| `TaskFilter` | Recibe `filtroActual` y la función `onCambiarFiltro`; avisa a `App` cuando se pulsa un botón. |
| `TaskList` | Recibe las tareas ya filtradas y las muestra. |

![Filtro de tareas funcionando](docs/evidencias/05-filtro-tareas.png)

### 7.3. Diseño responsive

Se usaron reglas de CSS propio y una media query (`@media (max-width: 600px)`) para adaptar la aplicación a pantallas pequeñas.

![Vista en escritorio](docs/evidencias/07-responsive-escritorio.png)

![Vista en móvil](docs/evidencias/06-responsive-movil.png)

### 7.4. Estado global

*Pendiente: se documentará cuando se implemente el estado global de las tareas (Context API o Zustand).*

## 8. Registro de dificultades y soluciones

| Dificultad encontrada | Solución aplicada |
|---|---|
| Al ejecutar `git commit` inicialmente apareció `nothing to commit`. | Se identificó que la carpeta todavía no contenía archivos del proyecto. Se continuó con la creación de React mediante Vite. |
| Al finalizar `npm install` apareció el aviso de 4 vulnerabilidades moderadas. | Se ejecutó `npm audit` y se identificó que el origen era `minimatch@10.2.6` (denegación de servicio por patrones), que llega como dependencia de `eslint@10.14.0`, una herramienta solo de desarrollo. Con `npm audit --omit=dev` se comprobó que las dependencias de producción tienen 0 vulnerabilidades. No se aplicó `npm audit fix --force` porque instalaría una versión anterior de ESLint (cambio incompatible) y podría romper la configuración. Se decidió mantener las versiones actuales y volver a revisar con `npm audit` más adelante. |
| En la consola apareció el error `Each child in a list should have a unique "key" prop` al renderizar `TaskList` con `.map()`. | Se agregó la prop `key={tarea.id}` a cada `TaskItem`. React usa `key` para identificar cada elemento de la lista y saber cuál cambió, se agregó o se eliminó. Debe ser único entre hermanos y estable, por eso se usa el `id` de la tarea y no el índice del arreglo. |

## 9. Fuentes de consulta

- [Documentación oficial de React](https://react.dev/)
- [Documentación oficial de Vite](https://vite.dev/)
- [Documentación de npm](https://docs.npmjs.com/)
- [Documentación de ESLint](https://eslint.org/)
