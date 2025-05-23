import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../feactures/auth/AuthContext'; // Ajusta la ruta si es necesario

const Comentarios = ({ tipo_evento }) => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');
  const { user: usuario } = useAuth();

  const API_PORT = import.meta.env.VITE_API_PORT || 3001;
  const API_URL = `http://localhost:${API_PORT}/comentarios`;

  useEffect(() => {
    // Cargar comentarios generales por tipo_evento
    axios
      .get(`${API_URL}/${tipo_evento}`)
      .then(res => setComentarios(res.data))
      .catch(err => console.error(err));
  }, [tipo_evento]);

  const enviarComentario = async (e) => {
    e.preventDefault();
    if (!nuevoComentario.trim()) return;
    if (!usuario) {
      alert('Debes iniciar sesión para comentar.');
      return;
    }
    try {
      await axios.post(API_URL, {
        tipo_evento,
        id_usuario: usuario.id,
        comentario: nuevoComentario
      });
      // Recargar comentarios después de comentar
      axios
        .get(`${API_URL}/${tipo_evento}`)
        .then(res => setComentarios(res.data))
        .catch(err => console.error(err));
      setNuevoComentario('');
    } catch (err) {
      console.error('Error al comentar:', err);
    }
  };

  // NUEVO: Función para eliminar comentario
  const eliminarComentario = async (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar este comentario?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setComentarios(comentarios.filter(c => c.id !== id));
    } catch (err) {
      console.error('Error al eliminar comentario:', err);
    }
  };

  return (
    <div className="comentarios-container">
      <h5>Comentarios</h5>
      {usuario ? (
        <form onSubmit={enviarComentario} className="mb-3">
          <textarea
            className="form-control mb-2"
            rows="3"
            value={nuevoComentario}
            onChange={e => setNuevoComentario(e.target.value)}
            placeholder="Escribe un comentario..."
            required
          />
          <button className="btn btn-primary" type="submit">Publicar</button>
        </form>
      ) : (
        <p>Inicia sesión para comentar.</p>
      )}

      <ul className="list-group">
        {comentarios.map((coment, idx) => (
          <li key={idx} className="list-group-item position-relative" style={{ paddingBottom: '0', minHeight: '60px' }}>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <strong>{coment.nombre} {coment.apellido}:</strong>
              <small className="text-muted" style={{ whiteSpace: 'nowrap' }}>
                {new Date(coment.fecha).toLocaleString()}
              </small>
            </div>
            <div style={{ textAlign: 'justify' }}>
              {coment.comentario}
            </div>
            {usuario && (usuario.id === coment.id_usuario || usuario.rol === 'admin' || usuario.rol === 'guiaturista') && (
              <button
                className="btn btn-link btn-sm text-danger eliminar-x"
                style={{
                  position: 'absolute',
                  right: '8px',
                  bottom: '4px',
                  fontSize: '1.2rem',
                  padding: 0,
                  lineHeight: 1,
                  zIndex: 2
                }}
                title="Eliminar"
                onClick={() => eliminarComentario(coment.id)}
              >
                ×
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
