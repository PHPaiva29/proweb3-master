const {Router} = require("express");

const CadastroEstatisticasController = require("../controllers/CadastroEstatisticasController")

const routes = Router();

routes.get("/CadastroEstatisticas", CadastroEstatisticasController.listAll);
routes.get("/CadastroEstatisticas/:CadastroEstatisticas_nome", CadastroEstatisticasController.get);
routes.post("/CadastroEstatisticas", CadastroEstatisticasController.post);
routes.delete("/CadastroEstatisticas/:CadastroEstatisticas_nome", CadastroEstatisticasController.delete);

module.exports = routes;
