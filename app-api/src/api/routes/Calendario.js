const {Router} = require("express");

const CalendarioController = require("../controllers/CalendarioController")

const routes = Router();

routes.get("/Calendario/:Calendario_data", CalendarioController.get);
routes.post("/Calendario", CalendarioController.post);
routes.delete("/Calendario/:Calendario_data", CalendarioController.delete);

module.exports = routes;
