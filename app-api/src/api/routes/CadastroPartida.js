const {Router} = require("express");

const CadastroPartidaController = require("../controllers/CadastroPartidaController")

const routes = Router();

routes.get("/CadastroPartida", CadastroPartidaController.listAll);
routes.get("/CadastroPartida/:CadastroPartida_id", CadastroPartidaController.get);
routes.post("/CadastroPartida", CadastroPartidaController.post);
routes.delete("/CadastroPartida/:CadastroPartida_id", CadastroPartidaController.delete);

module.exports = routes;
