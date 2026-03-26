const express = require("express");
const cors = require("cors");

const routes = require("./routes/index.routes");
const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta base
app.get("/api/v1", (req, res) => {
    res.json({
        message: "VetControl API funcionando correctamente 🐾"
    });
});

app.use("/api/v1", routes);

module.exports = app;