import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'usuariolibertadores',
    password : 'senhalibertadores',
    database : 'libertadoresdb'
});

export default pool;