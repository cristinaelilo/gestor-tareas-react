import { useParams, Link } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function Detalle() {
    // useParams extrae el "id" directamente de la URL (ej: /detalle/1)
    const { id } = useParams();

    // Traemos la lista de tareas globales que hicieron tus compañeras
    const { tareas } = useTareas();

    // Buscando la tarea que coincida con el ID de la URL
    const tarea = tareas.find(t => t.id.toString() === id);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Detalle de la Tarea</h2>

            {tarea ? (
                <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                    <p><strong>ID:</strong> {tarea.id}</p>
                    <p><strong>Título:</strong> {tarea.titulo}</p>
                    <p><strong>Estado:</strong> {tarea.completada ? 'Completada' : 'Pendiente'}</p>
                </div>
            ) : (
                <p>No se encontró la tarea con el ID: {id}</p>
            )}

            <Link to="/" style={{ display: 'inline-block', padding: '10px 15px', background: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                Volver al listado
            </Link>
        </div>
    );
}

export default Detalle;