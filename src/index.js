const express = require("express");
require("express-async-errors");

const app = express();

const routes = require("./routes");

//middleware para enviar json pelo body
app.use(express.json());
//chamada de rotas
app.use(routes);

app.use((error, request, response, next) => {
    console.log(error);
    response.sendStatus(500);
});

app.listen(3000, () =>
    console.log("🔥 Servidor iniciado em http://localhost:3000")
);
