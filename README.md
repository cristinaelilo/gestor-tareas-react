![Logo-UPS](img/logoUps.png)

# Gestor de Tareas - Práctica de Frameworks

**Integrantes:**
- Cristina Loja
- Denisse Paredes
- Brandon Collaguazo

**Framework elegido:** React

**Enlace cuaderno NotebookLM**: https://notebook.google.com/notebook/c1fd6dc9-7e93-4289-aed8-e8b662488572

## Bloque 1: Panorama
* **Origen:** Creado originalmente en 2011 por Jordan Walke.
* **Quién lo mantiene:** Meta (anteriormente Facebook) y la comunidad open source.
* **Versión actuál:** v.19.3.
* **Licencia:** MIT.
* **Filosofía:** React es una biblioteca (no es un framework completo) centrada excusivamente en la creación de interfaces de usuarios interactivas mediante componentes.

## Bloque 2: Instalación
* **Creación de proyecto:** Utilizamos Vite seleccionando la plantilla de React.
* **Tiempo de configuración inicial:**
* **Estructura:** 
    - `public/`: Recursos estáticos que no cambian.
    - `src/`: Contiene el código fuente, componentes y lógica principal.
    - `img/`: Contiene las imágenes, capturas de pantalla y recursos gráficos del informe.

## Bloque 3: Componentes
*En desarrollo*

## Bloque 4: Estado y reactividad
*En desarrollo*

---

## Mediciones técnicas
| Métrica | Cómo medirla | Resultado |
| :--- | :--- | :--- |
| Tiempo de configuración inicial (min) | Desde instalar hasta ver corriendo | [Minutos] |
| Líneas de código (LOC) | `npx cloc src` | ~40 líneas |
| Tamaño del build de producción (KB) | Carpeta dist tras el build | JS: 257.95 kB / CSS: 1.78 kB |
| Puntaje de rendimiento Lighthouse | Chrome Dev Tools, modo móvil | Pendiente |
| Horas totales del grupo | Registro de horas por integrante | Pendiente |
| Dificultad percibida (1 a 5) | Promedio de los integrantes | Pendiente |

## Bloque 5: Rutas Y API
* **Enrutador:** Utilizamos `react-router-dom` para manejar la navegación entre las vistas de "listado" y "detalle" sin recargar la página.
* **Error resuelto:** Al configurar las rutas, nos topamos con una pantalla negra y el error `Uncaught ReferenceError: Listado is not defined`. Lo solucionamos importando explícitamente los componentes al inicio de `App.jsx` y corrigiendo la sintaxis, ya que React exige que los componentes comiencen con letra mayúscula para no confundirlos con etiquetas HTML.

* **Error resuelto:** Al correr las 3 pruebas unitarias, obtuvimos un TestingLibraryElementError: Found multiple elements porque los componentes no se desmontaban entre cada test. Lo solucionamos importando cleanup de @testing-library/react y ejecutándolo dentro de un bloque afterEach() para limpiar el DOM virtual.