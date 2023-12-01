const {Router} = require("express");

const CadastroJogadorController = require("../controllers/CadastroJogadorController")

const routes = Router();

routes.get("/CadastroJogador", CadastroJogadorController.listAll);
routes.get("/CadastroJogador/:CadastroJogador_nome", CadastroJogadorController.get);
routes.post("/CadastroJogador", CadastroJogadorController.post);
routes.delete("/CadastroJogador/:CadastroJogador_nome", CadastroJogadorController.delete);

module.exports = routes;
