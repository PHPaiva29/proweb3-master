const {Router} = require("express");

const CadastroPatrocinioController = require("../controllers/CadastroPatrocinioController")

const routes = Router();

routes.get("/CadastroPatrocinio", CadastroPatrocinioController.listAll);
routes.get("/CadastroPatrocinio/:CadastroPatrocinio_nome", CadastroPatrocinioController.get);
routes.post("/CadastroPatrocinio", CadastroPatrocinioController.post);
routes.delete("/CadastroPatrocinio/:CadastroPatrocinio_nome", CadastroPatrocinioController.delete);

module.exports = routes;
