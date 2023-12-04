const CadastroPatrocinioService = require("../services/CadastroPatrocinioService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroEsportesRepository.all()
        // console.log(CadastroEsportesRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroPatrocinioService.getAllCadastroPatrocinio().then(
            patrocinio => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(patrocinio));
            }            
        )
    },
    // Adicionar Patrocinio
    post: function (req, res) {
        CadastroPatrocinioService.postNewCadastroPatrocinio(
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
        const CadastroPatrocinioNome = req.params.CadastroPatrocinio_nome;
        CadastroPatrocinioService.getCadastroPatrocinioPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroPatrocinioNome).then((patrocinio) => {
                if(patrocinio){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(patrocinio));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse patrocinador ${CadastroPatrocinioNome}.`});
                }                
            });
    },
    //Remove esporte
    delete: function (req, res) {
        CadastroPatrocinioService.deleteCadastroPatrocinioPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroPatrocinioNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
