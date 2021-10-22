const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const modProducto = async (req, res) => {
    console.log("entrando a funcion de eliminar")
    res.header("Access-Control-Allow-Origin", "*");
    const { idproducto_dele } = req.body;
    const sqlQuery = 'DELETE FROM Productos WHERE ID_PRODUCTO = $1 RETURNING *';
    const values = [idproducto_dele];
    const response = await pool.query(sqlQuery, values);
    console.log("Se elimino el producto: \n", response.rows);
    res.json(1);
}

module.exports = { modProducto };