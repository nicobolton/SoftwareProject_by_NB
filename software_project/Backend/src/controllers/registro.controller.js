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
    console.log("entrando a funcion de registro")
    res.header("Access-Control-Allow-Origin","*");
    const { user, email, pass, tel, dir, cump} = req.body;
    const sqlQuery = 'INSERT INTO Usuario (usuario, correo, clave, telefono, direccion, cumpleaños) values ($1,$2,$3,$4,$5,$6) RETURNING *';
    const values = [user, email, pass, tel, dir, cump];
    const response = await pool.query(sqlQuery, values);
    console.log("Registrando clientes con los datos: \n",response.rows);
    res.json(1);
};

module.exports = {registro};