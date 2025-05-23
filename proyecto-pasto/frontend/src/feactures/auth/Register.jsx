import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    password: '',
    correo: '',
    telefono: '',
    direccion: '',
    nombre: '',
    apellido: '',
    edad: '',
    fecha_nacimiento: '', // <-- corregido
    rol: 'usuario'        // <-- corregido
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const API_URL = 'http://localhost:3001/auth/register';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData);
      setSuccess('Registro exitoso. Puedes iniciar sesión ahora.');
      setError('');
      setFormData({
        password: '',
        correo: '',
        telefono: '',
        direccion: '',
        nombre: '',
        apellido: '',
        edad: '',
        fecha_nacimiento: '', // <-- corregido
        rol: 'usuario'        // <-- corregido
      });
    } catch (err) {
      setError('Error al registrar el usuario. Asegúrate de que el correo no esté en uso y que todos los campos estén completos.');
      setSuccess('');
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Registro</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_nacimiento" className="form-label">Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rol" className="form-label">Rol</label>
          <select
            className="form-select"
            id="rol"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            required
          >
            <option value="usuario">Usuario</option>
            <option value="guiaturista">Guía Turista</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
