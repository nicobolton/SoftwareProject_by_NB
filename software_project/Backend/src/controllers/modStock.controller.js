const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const modStock = async (req, res) => {
    console.log("Entrando funcion modificar Stock");
    const { nombre, id_categoria, marca, stock } = req.body;
    const response = await pool.query(`UPDATE Productos set stock = $4 where nombre = $1 and id_categoria = $2 and marca = $3`, [
        nombre,
        id_categoria,
        marca,
        stock
    ]);
    console.log(response);
    res.json('Stock actualizado');
}

module.exports = { modStock };