const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const Stock = async (req, res) => {
    const response = await pool.query("SELECT * FROM productos");
    res.json(response.rows)
}


module.exports = { Stock };