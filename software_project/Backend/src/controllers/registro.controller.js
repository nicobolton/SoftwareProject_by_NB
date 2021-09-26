const {Pool} = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const registro= async (req, res) =>{
    const { user, email, pass, tel } = req.body;
    const getUser = await pool.query("SELECT usuario FROM Usuario where usuario = $1::text", [user]);
    if (getUser.rows.length) {
        res.json({
            status: 0
        })
        return;
    }
    else {module.exports = {clientes};
        await pool.query("INSERT INTO Usuario(usuario,correo,clave,telefono) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text", [user, lname, email, pass, tel]);
        res.json({
            status: 1,
            user: user,
            email: email,
            pass: pass,
            tel: tel
        })
        return;
    }
};

module.exports = {registro};