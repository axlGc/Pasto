import jwt from 'jsonwebtoken';

const key_jwt = process.env.JWT_SECRET || '93!SFSCDDSodsfk923*ada';

// Middleware para verificar el token y el rol
export const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; // Formato: Bearer <token>
    if (!token) {
      return res.status(403).json({ error: 'Acceso denegado' });
    }
    try {
      const { id, correo, rol } = jwt.verify(token, key_jwt);
      if (!allowedRoles.includes(rol)) {
        return res.status(403).json({ error: 'Acceso no autorizado' });
      }
      req.userId = id;
      req.correo = correo;
      req.rol = rol;
      next();
    } catch (error) {
      return res.status(403).json({ error: 'Token inválido' });
    }
  };
};
