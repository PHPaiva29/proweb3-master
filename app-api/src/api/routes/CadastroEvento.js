const {Router} = require("express");

const CadastroEventoController = require("../controllers/CadastroEventoController")

const routes = Router();

routes.get("/CadastroEvento", CadastroEventoController.listAll);
routes.get("/CadastroEvento/:CadastroEvento_nome", CadastroEventoController.get);
routes.post("/CadastroEvento", CadastroEventoController.post);
routes.delete("/CadastroEvento/:CadastroEvento_nome", CadastroEventoController.delete);

module.exports = routes;
