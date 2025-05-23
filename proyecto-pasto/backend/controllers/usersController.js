import db from '../config/db.js';

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};

export const changeUserRole = async (req, res) => {
  const { id } = req.params;
  const { rol } = req.body;
  try {
    const [result] = await db.query('UPDATE users SET rol = ? WHERE id = ?', [rol, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Rol actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el rol' });
  }
};

const usersController = {
  getAllUsers
};

export default usersController;