const { Client } = require("pg");
require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente usando process.env
const user = process.env.USER_BD;
const pass = process.env.PASS_BD;
const port = process.env.PORT_BD;
const database = process.env.DATABASE_BD;

const client = new Client({
    host: "localhost",
    port: port,
    user: user,
    password: pass,
    database: database,
});

client.connect();

exports.query = async (query, values) => {
    const result = await client.query(query, values);
    return result.rows;
};
