const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);


const clientes = async (req, res) => {
    const { id_usuario } = req.body;
    const query = await pool.query("SELECT * FROM Usuario WHERE id_usuario=$1");
    const values = [id_usuario];
    const response = await pool.query(query, values);
    res.json(query.rows)
}


module.exports = { clientes };