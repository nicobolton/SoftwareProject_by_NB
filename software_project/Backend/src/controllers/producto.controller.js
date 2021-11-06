const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);


const producto = async (req, res) => {
    console.log("Entrando a la funcion")
    const response = await pool.query("SELECT * FROM Productos");
    res.json(response.rows)
}

module.exports = { producto };