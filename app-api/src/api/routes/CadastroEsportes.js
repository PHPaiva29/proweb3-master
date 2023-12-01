const {Router} = require("express");

const CadastroEsportesController = require("../controllers/CadastroEsportesController")

const routes = Router();

routes.get("/CadastroEsportes", CadastroEsportesController.listAll);
routes.get("/CadastroEsportes/:CadastroEsportes_nome", CadastroEsportesController.get);
routes.post("/CadastroEsportes", CadastroEsportesController.post);
routes.delete("/CadastroEsportes/:CadastroEsportes_nome", CadastroEsportesController.delete);

module.exports = routes;
