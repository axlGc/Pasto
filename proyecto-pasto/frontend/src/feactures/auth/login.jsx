import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './AuthContext'; // Asegúrate de que la ruta sea correcta

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const API_URL = 'http://localhost:3001/auth/login'; // Cambia esto según tu configuración

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar solo correo y password
      const response = await axios.post(API_URL, {
        correo: formData.correo,
        password: formData.password
      });
      const user = response.data.user; // Solo el objeto user
      login(user);
      console.log('Usuario guardado en contexto:', user);

      if (user.rol === 'admin') {
        navigate('/dashboard-coordinador');
      } else {
        navigate('/');
      }
      // No guardar JWT, solo mostrar mensaje o redirigir
      alert('Inicio de sesión exitoso');
      // Redirigir si es necesario
  
    } catch (err) {
      setError('Credenciales inválidas');
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        <button
          type="button"
          className="btn btn-secondary w-100"
          onClick={() => navigate('/register')}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Login;
