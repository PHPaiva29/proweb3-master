const CadastroEstatisticasService = require("../services/CadastroEstatisticasService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        res.statusCode = 200; // Status HTTP para OK;
        CadastroEstatisticasService.getAllCadastroEstatisticas().then(
            estatisticas => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(estatisticas));
            }            
        )
    },
    // Adicionar Estatistica
    post: function (req, res) {
        CadastroEstatisticasService.postNewCadastroEstatisticas(
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
        const CadastroEstatisticasId = req.params.CadastroEstatisticas_id;
        CadastroEstatisticasService.getCadastroEstatisticasPorId(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroEstatisticasId).then((estatisticas) => {
                if(estatisticas){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(estatisticas));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar essa partida ${CadastroEstatisticasId}.`});
                }                
            });
    },
    //Remove Estatisticas
    delete: function (req, res) {
        CadastroEstatisticasService.deleteCadastroEstatisticasPorId(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroEstatisticasId).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
