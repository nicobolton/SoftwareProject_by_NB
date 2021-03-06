const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const addProducto = async (req, res) => {
    console.log("entrando a agregar producto")
    res.header("Access-Control-Allow-Origin", "*");
    const { imagen, nombre, ID_CATEGORIA, marca, descripcion, precio, stock } = req.body;
    const postProducto = 'INSERT INTO Productos (imagen,nombre, ID_CATEGORIA, marca, descripcion, precio, stock) values (pg_read_binary_file($1),$2,$3,$4,$5,$6,$7) RETURNING *';
    const values = [imagen, nombre, ID_CATEGORIA, marca, descripcion, precio, stock];
    const response = await pool.query(postProducto, values);
    console.log("Se añade el producto: \n", response.rows);
    res.json(1)
};


module.exports = { addProducto };