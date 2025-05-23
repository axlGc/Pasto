import db from '../config/db.js';

const tablas = ['eventospre', 'eventos2', 'eventos3', 'eventos4', 'eventos5', 'eventos6'];

const getEventos = (tabla) => async (req, res) => {
  try {
    const [results] = await db.query(`SELECT * FROM ${tabla}`);
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createEvento = (tabla) => async (req, res) => {
  const { titulo, fecha, hora, lugar, descripcion } = req.body;
  try {
    const [result] = await db.query(
      `INSERT INTO ${tabla} (titulo, fecha, hora, lugar, descripcion) VALUES (?, ?, ?, ?, ?)`,
      [titulo, fecha, hora, lugar, descripcion]
    );
    res.json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateEvento = (tabla) => async (req, res) => {
  const { id } = req.params;
  const { titulo, fecha, hora, lugar, descripcion } = req.body;
  try {
    await db.query(
      `UPDATE ${tabla} SET titulo=?, fecha=?, hora=?, lugar=?, descripcion=? WHERE id=?`,
      [titulo, fecha, hora, lugar, descripcion, id]
    );
    res.json({ id: parseInt(id), ...req.body });
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteEvento = (tabla) => async (req, res) => {
  const { id } = req.params;
  try {
    await db.query(`DELETE FROM ${tabla} WHERE id=?`, [id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default {
  tablas,
  getEventos,
  createEvento,
  updateEvento,
  deleteEvento,
};

