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

## 2. Instalación y configuración

### 2.1. Requisitos previos

Antes de crear el proyecto, se verificó que Node.js, npm y Git estuvieran instalados en el equipo.

Versiones utilizadas:

| Herramienta | Versión |
|---|---|
| Node.js | v26.13.0 |
| npm | 11.20.0 |
| Git | 2.55.0 |
| create-vite (generador del proyecto) | 9.3.4 |
| Vite (servidor de desarrollo) | 8.3.6 |
| ESLint	| 10.14.0 |

> `create-vite` y `Vite` son dos paquetes distintos: el primero genera el proyecto y el segundo lo ejecuta.

Para comprobar las versiones se utilizaron los siguientes comandos:

```bash
node -v
npm -v
git --version
```

![Versiones utilizadas](docs/evidencias/versiones.png)

### 2.2. Creación del proyecto

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

### 2.3. Resultado de la instalación

La instalación finalizó correctamente y se visualizó la página inicial de React y Vite en el navegador.

Esto permitió comprobar que el entorno de desarrollo estaba funcionando y que los cambios realizados en el código podían reflejarse automáticamente en el navegador mediante HMR (Hot Module Replacement).

### 2.4. Tiempo de configuración inicial

| Medición | Resultado |
|---|---|
| Inicio | Ejecución del comando npm create vite@latest . -- --template react |
| Finalización | Primera ejecución exitosa de la aplicación en http://localhost:5173/ |
| Tiempo total | Aproximadamente 3 a 5 minutos |


### 2.5. Evidencias de instalación

- `01-instalacion-react.png`: creación e instalación del proyecto con Vite.

![Creación del proyecto](docs/evidencias/01-instalacion-react.png)

- `02-aplicacion-ejecutando.png`: aplicación inicial funcionando en el navegador.

![Visualización](docs/evidencias/02-aplicacion-ejecutando.png)

## 3. Estructura inicial del proyecto

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

### 3.1. Descripción de los archivos principales

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

## 4. Registro de dificultades y soluciones

| Dificultad encontrada | Solución aplicada |
|---|---|
| Al finalizar `npm install` apareció el aviso de 4 vulnerabilidades de severidad moderada. | Se ejecutó npm audit y se identificó que el origen era minimatch@10.2.6 (denegación de servicio por patrones), que llega como dependencia de eslint@10.14.0, una herramienta solo de desarrollo. Con npm audit --omit=dev se comprobó que las dependencias de producción tienen 0 vulnerabilidades. No se aplicó npm audit fix --force porque instalaría una versión anterior de ESLint (cambio incompatible) y podría romper la configuración. Se decidió mantener las versiones actuales y volver a revisar con npm audit más adelante.|

## 5. Fuentes de consulta

- [Documentación oficial de React](https://react.dev/)
- [Documentación oficial de Vite](https://vite.dev/)
- [Documentación de npm](https://docs.npmjs.com/)
- [Documentación de ESLint](https://eslint.org/)
