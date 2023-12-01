const CalendarioService = require("../services/CalendarioService");

module.exports = {
    // Adicionar Calendario
    post: function (req, res) {
        CalendarioService.postNewCalendario(
            req.body
        ).then((status) => {
            res.statusCode = 201; // Status HTTP para created;
            res.set("Content-Type", "application/json");
            res.send(JSON.stringify(status));
        }).catch(error => {
            console.error(error);
            res.statusCode = 500; //Status HTTP para erro interno
            res.set("Content-Type", "application/text");
            res.send(error.message);
        });
    },
    // Usado para listar
    get: function (req, res) {
        const CalendarioData = req.params.Calendario_data;
        CalendarioService.getCalendarioPorData(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CalendarioData).then((calendario) => {
                if(calendario){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(calendario));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar essa data ${CalendarioData}.`});
                }                
            });
    },
    //Remove calendario
    delete: function (req, res) {
        CalendarioService.deleteCalendarioPorData(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CalendarioData).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
