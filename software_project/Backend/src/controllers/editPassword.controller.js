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
    const { pass, newpass, newpassv, iduser } = req.body;
    const response = await pool.query(`UPDATE Usuario set clave = $2 where ID_USUARIO = $4 and clave = $1`, [
        usuario,
        correo,
        clave,
        telefono,
        direccion
    ]);
    console.log(response);
    res.json('Password Updated Successfully');
}

module.exports = { editPassword };