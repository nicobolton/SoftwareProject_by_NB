const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const login = async (req, res) => {
    console.log("entrando a funcion de inicio de sesión")
    const { email, pass } = req.body;
    const getUser = await pool.query("SELECT ID_USUARIO FROM Usuario where correo = $1 AND clave = $2", [email, pass]);
    if (getUser.rows.length) {
        res.json({
            status: 1,
            token: getUser.rows[0].id_usuario

        })
        console.log("Se ha iniciado sesion")
        return;
    } else {
        res.json({
            status: 0
        })
        console.log("No pudo iniciar sesion")
        return;
    }
};

module.exports = { login };