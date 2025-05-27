// backend/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createPool({
  host: 'lklot.h.filess.io',
  user: 'databasepasto_zeroouttwo',
  password: '299be40bf002daabb63aa246b536de06683d5891',     
  database: 'databasepasto_zeroouttwo',
  port: 61002, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection()
  .then(() => {
    console.log('Conexión exitosa a MySQL 🚀');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

export default db;
