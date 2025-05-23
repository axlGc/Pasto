import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editRolId, setEditRolId] = useState(null); // Estado para mostrar el select

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users/listaUsuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/listaUsuarios/${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const cambiarRol = async (id, nuevoRol) => {
    try {
      await axios.put(`http://localhost:3001/users/listaUsuarios/${id}/rol`, { rol: nuevoRol });
      setEditRolId(null); // Oculta el select después de cambiar
      fetchUsuarios();
    } catch (error) {
      console.error('Error al cambiar rol del usuario:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Gestión de Usuarios</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre} {usuario.apellido}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
              <td>
                <button className="btn btn-danger btn-sm me-2" onClick={() => eliminarUsuario(usuario.id)}>
                  Eliminar
                </button>
                {editRolId === usuario.id ? (
                  <select
                    className="form-select d-inline w-auto"
                    value={usuario.rol}
                    onChange={e => cambiarRol(usuario.id, e.target.value)}
                    style={{ display: 'inline-block', width: 'auto', marginRight: '8px' }}
                  >
                    <option value="admin">admin</option>
                    <option value="guiaturista">guiaturista</option>
                    <option value="usuario">usuario</option>
                  </select>
                ) : (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => setEditRolId(usuario.id)}
                    disabled={usuario.rol === 'admin'}
                  >
                    Cambiar Rol
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionUsuarios;
