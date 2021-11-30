const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const editPassword = async (req, res) => {
    console.log("Entrando funcion editar password");
    const { newpass, id_usuario } = req.body;
    const response = await pool.query(`UPDATE Usuario set clave = $1 where ID_USUARIO = $2 `, [
        newpass,
        id_usuario
    ]);
    console.log(response);
    res.json('Password Updated Successfully');
}

module.exports = { editPassword };