const CadastroImprensaService = require("../services/CadastroImprensaService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroEsportesRepository.all()
        // console.log(CadastroEsportesRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroImprensaService.getAllCadastroImprensa().then(
            imprensa => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(imprensa));
            }            
        )
    },
    // Adicionar Imprensa
    post: function (req, res) {
        CadastroImprensaService.postNewCadastroImprensa(
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
        const CadastroImprensaNome = req.params.CadastroImprensa_nome;
        CadastroImprensaService.getCadastroImprensaPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroImprensaNome).then((imprensa) => {
                if(imprensa){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(imprensa));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse patrocinador ${CadastroImprensaNome}.`});
                }                
            });
    },
    //Remove esporte
    delete: function (req, res) {
        CadastroImprensaService.deleteCadastroImprensaPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroImprensaNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
