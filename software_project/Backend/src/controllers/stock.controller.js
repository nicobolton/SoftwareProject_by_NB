const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const stock = async (req, res) => {
    console.log("ENTRANDO A CAMBIAR STOCK");
    const { nombre, ID_CATEGORIA, marca, stock } = req.body;
    const response = await pool.query(`UPDATE productos set stock = $4 where nombre = $1 and ID_CATEGORIA = $2 and marca = $3`, [
        nombre,
        ID_CATEGORIA,
        marca,
        stock
    ]);
    console.log(response);
    res.json('Stock Updated Successfully')
}

module.exports = { stock };