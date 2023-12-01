const {Router} = require("express");

const CadastroTimeController = require("../controllers/CadastroTimeController")

const routes = Router();

routes.get("/CadastroTime", CadastroTimeController.listAll);
routes.get("/CadastroTime/:CadastroTime_nome", CadastroTimeController.get);
routes.post("/CadastroTime", CadastroTimeController.post);
routes.delete("/CadastroTime/:CadastroTime_nome", CadastroTimeController.delete);

module.exports = routes;
