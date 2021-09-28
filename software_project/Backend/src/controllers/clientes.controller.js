const {Pool} = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);


const clientes = async (req, res) =>{
    const response = await pool.query("SELECT usuario FROM Usuario WHERE id_usuario = 1");
    res.json(response.rows)
}


module.exports = {clientes};