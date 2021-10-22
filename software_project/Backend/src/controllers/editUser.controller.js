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
    console.log("Entrando funcion editar usuario");
    const { usuario, correo, clave, telefono, direccion } = req.body;
    const response = await poolrpa.query(`UPDATE Usuario set usuario = $1, correo = $2, clave = $3, telefono = $4, direccion = $5 where ID_USUARIO = $5`, [
        usuario,
        correo,
        clave,
        telefono,
        direccion
    ]);
    console.log(response);
    res.json('User Updated Successfully');
}

module.exports = { editUser };