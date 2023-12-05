const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const CadastroEsportesRotas = require("./src/api/routes/CadastroEsportes");
const CadastroEventoRotas = require("./src/api/routes/CadastroEvento");
const CalendarioRotas = require("./src/api/routes/Calendario");
const CadastroTecnicoRotas = require("./src/api/routes/CadastroTecnico");
const CadastroJogadorRotas = require("./src/api/routes/CadastroJogador");
const CadastroTimeRotas = require("./src/api/routes/CadastroTime");
const CadastroPartidaRotas = require("./src/api/routes/CadastroPartida");
const CadastroResultadoRotas = require("./src/api/routes/CadastroResultado");
const CadastroEstatisticasRotas = require("./src/api/routes/CadastroEstatisticas");
const CadastroPatrocinioRotas = require("./src/api/routes/CadastroPatrocinio");
const CadastroImprensaRotas = require("./src/api/routes/CadastroImprensa");
const app = express();

    //Configuração dos middlewares
    app.use(cors());
    app.use(bodyParser.json());

    //Configuração das rotas da API
    
    app.use("/api", CadastroEsportesRotas);

    app.use("/api", CadastroEventoRotas);

    app.use("/api", CalendarioRotas);

    app.use("/api", CadastroTecnicoRotas);
    
    app.use("/api", CadastroJogadorRotas);

    app.use("/api", CadastroTimeRotas);

    app.use("/api", CadastroPartidaRotas);
    
    app.use("/api", CadastroResultadoRotas);

    app.use("/api", CadastroEstatisticasRotas);

    app.use("/api", CadastroPatrocinioRotas);

    app.use("/api", CadastroImprensaRotas);

    /*app.get("/", (req, res) =>{
        res.send("Express server");
        res.end();
    });*/

    //Exporta o aplicativo express configurado
    module.exports = app;