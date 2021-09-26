const {Pool} = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const login= async (req, res) =>{
    console.log("entrando a funcion de inicio de sesión")
    const { email, pass } = req.body;
    const getUser = await pool.query("SELECT ID_USUARIO FROM Usuario where correo = $1::text AND clave = $2::text", [email, pass]);
    if(getUser.rows.length){
        res.json({
            status:1,
            token: getUser.rows[0].id
            
        })
        console.log("se inicio sesion")
        return;
    } else{
        res.json({
            status: 0
        })
        return;
    }
};

module.exports = {login};