const CadastroEsportesService = require("../services/CadastroEsportesService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroEsportesRepository.all()
        // console.log(CadastroEsportesRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroEsportesService.getAllCadastroEsportes().then(
            esportes => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(esportes));
            }            
        )
    },
    // Adicionar Esporte
    post: function (req, res) {
        CadastroEsportesService.postNewCadastroEsportes(
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
        const CadastroEsportesNome = req.params.CadastroEsportes_nome;
        CadastroEsportesService.getCadastroEsportesPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroEsportesNome).then((esporte) => {
                if(esporte){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(esporte));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse esporte ${CadastroEsportesNome}.`});
                }                
            });
    },
    //Remove esporte
    delete: function (req, res) {
        CadastroEsportesService.deleteCadastroEsportesPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroEsportesNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
