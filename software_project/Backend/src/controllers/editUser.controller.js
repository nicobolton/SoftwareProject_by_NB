const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const editUser = async (req, res) => {
    console.log("Entrando funcion editar usuario");
    const { user, email, tel, dir, id_usuario } = req.body;
    const response = await pool.query(`UPDATE Usuario set usuario = $1, correo = $2, telefono = $3, direccion = $4 where ID_USUARIO = $5`, [
        user,
        email,
        tel,
        dir,
        id_usuario
    ]);
    console.log(response);
    res.json('User Updated Successfully');
}

module.exports = { editUser };