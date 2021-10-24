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
    const { nombre, ID_CATEGORIA, marca, stock } = req.body;
    const response = await poolrpa.query(`UPDATE productos set stock = $4 where ID_CATEGORIA = $2 and nombre = $1 and marca = $3`, [
        nombre,
        ID_CATEGORIA,
        marca,
        stock
    ]);
    console.log(response);
    res.json('Stock Updated Successfully')
}

module.exports = { stock };