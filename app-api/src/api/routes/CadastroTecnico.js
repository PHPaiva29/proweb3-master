const {Router} = require("express");

const CadastroTecnicoController = require("../controllers/CadastroTecnicoController")

const routes = Router();

routes.get("/CadastroTecnico", CadastroTecnicoController.listAll);
routes.get("/CadastroTecnico/:CadastroTecnico_nome", CadastroTecnicoController.get);
routes.post("/CadastroTecnico", CadastroTecnicoController.post);
routes.delete("/CadastroTecnico/:CadastroTecnico_nome", CadastroTecnicoController.delete);

module.exports = routes;
