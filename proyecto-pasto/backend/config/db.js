// backend/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',     
  database: 'databasepasto',
  port: 3306, 
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