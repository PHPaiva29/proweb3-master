const {Router} = require("express");

const CadastroResultadoController = require("../controllers/CadastroResultadoController")

const routes = Router();

routes.get("/CadastroResultado", CadastroResultadoController.listAll);
routes.get("/CadastroResultado/:CadastroResultado_nome", CadastroResultadoController.get);
routes.post("/CadastroResultado", CadastroResultadoController.post);
routes.delete("/CadastroResultado/:CadastroResultado_nome", CadastroResultadoController.delete);

module.exports = routes;
