const CadastroJogadorService = require("../services/CadastroJogadorService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroJogadorRepository.all()
        // console.log(CadastroJogadorRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroJogadorService.getAllCadastroJogador().then(
            jogador => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(jogador));
            }            
        )
    },
    // Adicionar Jogador
    post: function (req, res) {
        CadastroJogadorService.postNewCadastroJogador(
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
        const CadastroJogadorNome = req.params.CadastroJogador_nome;
        CadastroJogadorService.getCadastroJogadorPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroJogadorNome).then((jogador) => {
                if(jogador){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(jogador));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse jogador ${CadastroJogadorNome}.`});
                }                
            });
    },
    //Remove jogador
    delete: function (req, res) {
        CadastroJogadorService.deleteCadastroJogadorPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroJogadorNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
