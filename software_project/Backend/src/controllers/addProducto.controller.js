const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const addProducto = async (req, res) => {
    console.log("entrando a agregar producto")
    res.header("Access-Control-Allow-Origin", "*");
    const { nombre, id_categoria, descripcion, precio, stock} = req.body;
    const postProducto = 'INSERT INTO Productos (nombre, ID_CATEGORIA, descripcion, precio, stock) values ($1,$2,$3,$4,$5) RETURNING *';
    const values = [nombre, id_categoria, descripcion, precio, stock];
    const response = await pool.query(postProducto, values);
    console.log("Se añadie el producto: \n", response.rows);
    res.json(1)
};


module.exports = { addProducto };