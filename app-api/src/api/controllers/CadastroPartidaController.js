const CadastroPartidaService = require("../services/CadastroPartidaService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        res.statusCode = 200; // Status HTTP para OK;
        CadastroPartidaService.getAllCadastroPartida().then(
            partida => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(partida));
            }            
        )
    },
    // Adicionar Partida
    post: function (req, res) {
        CadastroPartidaService.postNewCadastroPartida(
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
        const CadastroPartidaId = req.params.CadastroPartida_id;
        CadastroPartidaService.getCadastroPartidaPorId(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroPartidaId).then((partida) => {
                if(partida){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(partida));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar essa partida ${CadastroPartidaId}.`});
                }                
            });
    },
    //Remove partida
    delete: function (req, res) {
        CadastroPartidaService.deleteCadastroPartidaPorId(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroPartidaId).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
