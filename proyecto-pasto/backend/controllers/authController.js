import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

const key_jwt = process.env.JWT_SECRET || '93!SFSCDDSodsfk923*ada';

const prueba = (req, res) => {
  res.send('Funciona');
};

// Registro de usuario
const register = async (req, res) => {
  try {
    const { correo, password, telefono, direccion, nombre, apellido, edad, fecha_nacimiento, rol } = req.body;
    if (!correo || !password || !telefono || !direccion || !nombre || !apellido || !edad || !fecha_nacimiento || !rol) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const [users] = await db.query('SELECT * FROM users WHERE correo = ?', [correo]);
    if (users.length > 0) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query(
      'INSERT INTO users (correo, password, telefono, direccion, nombre, apellido, edad, fecha_nacimiento, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [correo, hashedPassword, telefono, direccion, nombre, apellido, edad, fecha_nacimiento, rol]
    );

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Inicio de sesión
const login = async (req, res) => {
  try {
    const { correo, password } = req.body;

    if (!correo || !password) {
      return res.status(400).json({ error: 'Credenciales requeridas' });
    }

    const [users] = await db.query('SELECT * FROM users WHERE correo = ?', [correo]);
    if (users.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const user = users[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Si quieres devolver un token, descomenta lo siguiente:
    // const token = jwt.sign(
    //   { userId: user.id, correo: user.correo, nombre: user.nombre, rol: user.rol },
    //   key_jwt,
    //   { expiresIn: '1h' }
    // );
    // res.json({ token });

    res.json({ message: 'Inicio de sesión exitoso', user: { id: user.id, correo: user.correo, rol: user.rol } });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Cambiar contraseña
const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const [users] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (users.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const user = users[0];
    const isValidPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Contraseña actual incorrecta' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const [result] = await db.query(
      'UPDATE users SET password = ? WHERE id = ?',
      [hashedPassword, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    console.error('Error en cambio de contraseña:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Forzar cambio de contraseña (admin)
const forceChangePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const [result] = await db.query(
      'UPDATE users SET password = ? WHERE id = ?',
      [hashedPassword, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ message: 'Contraseña actualizada exitosamente' });
  } catch (error) {
    console.error('Error en cambio forzado de contraseña:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const authController = {
  prueba,
  register,
  login,
  changePassword,
  forceChangePassword
};

export default authController;