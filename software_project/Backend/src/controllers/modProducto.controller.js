const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const modProducto = async (req, res) => {
    console.log("Entrando funcion editar usuario");
    const { nombre, descripcion, precio} = req.body;
    const response = await poolrpa.query(`UPDATE Productos set nombre = $1, descripcion = $2, precio = $3 where ID_PRODUCTO = $4`,[
        nombre,
        descripcion,
        precio
    ]);
    console.log(response);
    res.json('User Updated Successfully');
}

module.exports = { modProducto };