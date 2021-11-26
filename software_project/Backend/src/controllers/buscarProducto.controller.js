const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);


const buscarProducto = async (req, res) => {
    const { nombre } = req.body;
    const query = await pool.query("SELECT nombre FROM Producto WHERE nombre=$1");
    const values = [nombre];
    const response = await pool.query(query, values);
    res.json(query.rows)
}


module.exports = { buscarProducto };