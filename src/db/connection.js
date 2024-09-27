import mysql2 from 'mysql2/promise';

const db = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_tcc"
})

console.log("Conexão realizada com sucesso !")

export default db;