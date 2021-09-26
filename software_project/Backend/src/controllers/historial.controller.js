const {Pool} = require('pg');

const config = {
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const historial = async (req, res) =>{
    const response = await pool.query("SELECT id_venta, fecha, cantidad, subtotal FROM DetalleVenta");
    res.json(response.rows)
}


module.exports = {historial};