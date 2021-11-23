const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const editProducto = async (req, res) => {
    console.log("Entrando funcion editar producto");
    const { id, id_usuario } = req.body;
    const response = await pool.query(`SELECT * FROM productos WHERE ID_USUARIO = $2`, [
        id_usuario
    ]);
    console.log(response);
    res.json('Product Updated Successfully');
}

module.exports = { editProducto };