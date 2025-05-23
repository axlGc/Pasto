import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style/estilosListaDeEvento.css';

const ListaEventos4 = () => {
  const tabla = 'eventos4';
  const [eventos, setEventos] = useState([]);
  const [formData, setFormData] = useState({
    titulo: '',
    fecha: '',
    hora: '',
    lugar: '',
    descripcion: ''
  });
  const [editandoEvento, setEditandoEvento] = useState(null);

  const API_PORT = import.meta.env.VITE_API_PORT || 3001;
  const API_URL = `http://localhost:${API_PORT}/eventos/${tabla}`;
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => setEventos(res.data))
      .catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, formData);
      setEventos([...eventos, res.data]);
      setFormData({ titulo: '', fecha: '', hora: '', lugar: '', descripcion: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    const evento = eventos.find(e => e.id === id);
    setEditandoEvento(evento);
    setFormData(evento);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const id = formData.id;
      const res = await axios.put(`${API_URL}/${id}`, formData);
      setEventos(eventos.map((e) => (e.id === id ? res.data : e)));
      setEditandoEvento(null);
      setFormData({ titulo: '', fecha: '', hora: '', lugar: '', descripcion: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEventos(eventos.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fullscreen-center">
      <div className="content-container">
        <h2 className="text-center mb-4">4 DE ENERO</h2>

        {!editandoEvento && (
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Título"
              className="form-control mb-2"
              value={formData.titulo}
              onChange={e => setFormData({ ...formData, titulo: e.target.value })}
              required
            />
            <input
              type="date"
              className="form-control mb-2"
              value={formData.fecha}
              onChange={e => setFormData({ ...formData, fecha: e.target.value })}
              required
            />
            <input
              type="time"
              className="form-control mb-2"
              value={formData.hora}
              onChange={e => setFormData({ ...formData, hora: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Lugar"
              className="form-control mb-2"
              value={formData.lugar}
              onChange={e => setFormData({ ...formData, lugar: e.target.value })}
              required
            />
            <textarea
              placeholder="Descripción"
              className="form-control mb-2"
              value={formData.descripcion}
              onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-primary w-100">Crear Evento</button>
          </form>
        )}

        {editandoEvento && (
          <form onSubmit={handleUpdate} className="mb-4">
            <input
              type="text"
              value={formData.titulo}
              className="form-control mb-2"
              onChange={e => setFormData({ ...formData, titulo: e.target.value })}
              required
            />
            <input
              type="date"
              value={formData.fecha}
              className="form-control mb-2"
              onChange={e => setFormData({ ...formData, fecha: e.target.value })}
              required
            />
            <input
              type="time"
              value={formData.hora}
              className="form-control mb-2"
              onChange={e => setFormData({ ...formData, hora: e.target.value })}
              required
            />
            <input
              type="text"
              value={formData.lugar}
              className="form-control mb-2"
              onChange={e => setFormData({ ...formData, lugar: e.target.value })}
              required
            />
            <textarea
              value={formData.descripcion}
              className="form-control mb-2"
              onChange={e => setFormData({ ...formData, descripcion: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-success w-100">Actualizar Evento</button>
          </form>
        )}

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Título</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Lugar</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map(evento => (
              <tr key={evento.id}>
                <td>{evento.titulo}</td>
                <td>{evento.fecha}</td>
                <td>{evento.hora}</td>
                <td>{evento.lugar}</td>
                <td>{evento.descripcion}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(evento.id)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(evento.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaEventos4;
