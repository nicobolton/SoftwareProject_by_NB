const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const addConsulta = async (req, res) => {
    console.log("entrando a agregar consulta")
    const { correo, titulo, descripcion } = req.body;
    const addConsulta = 'INSERT INTO Consultas (correo, estado, titulo, descripcion) values ($1, false, $2, $3) RETURNING *';
    const values = [correo, titulo, descripcion];
    const response = await pool.query(addConsulta, values);
    console.log("Se añade la consulta: \n", response.rows);
    res.json(1)
};


module.exports = { addConsulta };