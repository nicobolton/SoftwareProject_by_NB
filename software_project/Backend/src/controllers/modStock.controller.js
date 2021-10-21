const { Pool } = require('pg');

const config = {
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "viasalud"
};

const pool = new Pool(config);

const modStock = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    const { stock_cambio, id_prod } = req.body
    const response = await pool.query("UPDATE producto set stock=$1 where ID_PRODUCTO =$5" ,[
        stock_cambio,
        id_prod
    ]);
    console.log(response);
    res.json(response.rows)
}


module.exports = { modStock };