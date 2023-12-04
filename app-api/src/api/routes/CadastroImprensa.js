const {Router} = require("express");

const CadastroImprensaController = require("../controllers/CadastroImprensaController")

const routes = Router();

routes.get("/CadastroImprensa", CadastroImprensaController.listAll);
routes.get("/CadastroImprensa/:CadastroImprensa_nome", CadastroImprensaController.get);
routes.post("/CadastroImprensa", CadastroImprensaController.post);
routes.delete("/CadastroImprensa/:CadastroImprensa_nome", CadastroImprensaController.delete);

module.exports = routes;
