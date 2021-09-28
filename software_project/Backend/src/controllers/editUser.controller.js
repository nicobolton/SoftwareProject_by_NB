const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const editUser = async (req, res) => {
    console.log("Entra a la función de editar")
    res.header("Access-Control-Allow-Origin", "*");
    const { dir, cum } = req.body
    const sqlQuery = ("UPDATE Usuario SET direccion = "[dir] + "WHERE ID_USUARIO =");
    //Ver bien con el frontend, debido a que hay que guardar un local storage
    const sqlQuery2 = ("UPDATE Usuario SET cumpleaños = "[cum] + "WHERE ID_USUARIO =");
    const values = [dir]
    const values2 = [cum]
    const response = await pool.query(sqlQuery, values);
    const response2 = await pool.query(sqlQuery2, values2);
    console.log("Editado la info \n", response.row, response2.row)
    res.json(1)

}

module.exports = { editUser };