const cors = require("cors");
const express = require("express");
const session = require("express-session");

// routes
const Looker = require("./routes/looker.route");

// middlewares
const AuthenticationMiddleware = require("./middleware/authentication.middleware");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(
  session({
    secret: "chave-secreta", // Uma chave secreta para assinar a sessão
    resave: false, // Evitar resave da sessão
    saveUninitialized: true, // Salvar sessões não inicializadas
  })
);

app.get("/", (_, res) => {
  res.send("API is running...");
});

app.use("/looker", Looker);

module.exports = app;
