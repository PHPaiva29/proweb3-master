const CadastroResultadoService = require("../services/CadastroResultadoService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        res.statusCode = 200; // Status HTTP para OK;
        CadastroResultadoService.getAllCadastroResultado().then(
            resultado => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(resultado));
            }            
        )
    },
    // Adicionar Resultado
    post: function (req, res) {
        CadastroResultadoService.postNewCadastroResultado(
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
        const CadastroResultadoNome = req.params.CadastroResultado_nome;
        CadastroResultadoService.getCadastroResultadoPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroResultadoNome).then((resultado) => {
                if(resultado){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(resultado));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse resultado ${CadastroResultadoNome}.`});
                }                
            });
    },
    //Remove resultado
    delete: function (req, res) {
        CadastroResultadoService.deleteCadastroResultadoPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroResultadoNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
