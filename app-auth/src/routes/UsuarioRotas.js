// const routes = require("express").Router();
const {Router} = require("express");
//const {verifyJWT} = require("../middleware/AuthMiddleware");
const UsuarioController = require("../controllers/UsuarioController")

const routes = Router();

// o GET /Usuario não vai precisar de autenticação
routes.post("/usuario", UsuarioController.criarUsuario);
routes.delete("/usuario/:id", UsuarioController.deleteUsuario);
routes.get("/usuario/:id", UsuarioController.getUsuario);
routes.put("/usuario/:id", UsuarioController.updateUsuario);

module.exports = routes;