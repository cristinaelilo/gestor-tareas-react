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

### 5.4. `App.jsx`

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

## 6. Registro de dificultades y soluciones

| Dificultad encontrada | Solución aplicada |
|---|---|
| Al ejecutar `git commit` inicialmente apareció `nothing to commit`. | Se identificó que la carpeta todavía no contenía archivos del proyecto. Se continuó con la creación de React mediante Vite. |
| Al finalizar `npm install` apareció el aviso de 4 vulnerabilidades moderadas. | Se ejecutó `npm audit` y se identificó que el origen era `minimatch@10.2.6` (denegación de servicio por patrones), que llega como dependencia de `eslint@10.14.0`, una herramienta solo de desarrollo. Con `npm audit --omit=dev` se comprobó que las dependencias de producción tienen 0 vulnerabilidades. No se aplicó `npm audit fix --force` porque instalaría una versión anterior de ESLint (cambio incompatible) y podría romper la configuración. Se decidió mantener las versiones actuales y volver a revisar con `npm audit` más adelante. |

## 7. Fuentes de consulta

- [Documentación oficial de React](https://react.dev/)
- [Documentación oficial de Vite](https://vite.dev/)
- [Documentación de npm](https://docs.npmjs.com/)
- [Documentación de ESLint](https://eslint.org/)