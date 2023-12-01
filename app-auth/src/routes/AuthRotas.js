const {Router} = require("express");

const AuthController = require("../controllers/AuthController")

const routes = Router();

routes.post("/login", AuthController.doLogin);
//Não entendi
routes.get("/logout", AuthController.doLogin);

module.exports = routes;