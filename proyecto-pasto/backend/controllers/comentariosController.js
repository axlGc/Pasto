import db from '../config/db.js';

// Obtener comentarios por tipo_evento
export const obtenerComentarios = async (req, res) => {
  const { tipo_evento } = req.params;
  const sql = `
    SELECT c.id, c.comentario, c.fecha, u.nombre, u.apellido
    FROM comentarios c
    JOIN users u ON c.id_usuario = u.id
    WHERE c.tipo_evento = ?
    ORDER BY c.fecha DESC
  `;
  try {
    const [results] = await db.query(sql, [tipo_evento]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un nuevo comentario
export const crearComentario = async (req, res) => {
  const { tipo_evento, id_usuario, comentario } = req.body;
  console.log('Datos recibidos:', req.body);
  const sql = `
    INSERT INTO comentarios (tipo_evento, id_usuario, comentario, fecha)
    VALUES (?, ?, ?, NOW())
  `;
  try {
    const [result] = await db.query(sql, [tipo_evento, id_usuario, comentario]);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    console.error('Error al crear comentario:', err);
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un comentario por ID
export const eliminarComentario = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM comentarios WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    res.json({ message: 'Comentario eliminado correctamente' });
  } catch (err) {
    console.error('Error al eliminar comentario:', err);
    res.status(500).json({ error: err.message });
  }
};

