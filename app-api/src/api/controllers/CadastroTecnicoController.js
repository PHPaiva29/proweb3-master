const CadastroTecnicoService = require("../services/CadastroTecnicoService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroTecnicoRepository.all()
        // console.log(CadastroTecnicoRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroTecnicoService.getAllCadastroTecnico().then(
            tecnico => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(tecnico));
            }            
        )
    },
    // Adicionar Tecnico
    post: function (req, res) {
        CadastroTecnicoService.postNewCadastroTecnico(
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
        const CadastroTecnicoNome = req.params.CadastroTecnico_nome;
        CadastroTecnicoService.getCadastroTecnicoPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroTecnicoNome).then((tecnico) => {
                if(tecnico){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(tecnico));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse tecnico ${CadastroTecnicoNome}.`});
                }                
            });
    },
    //Remove tecnico
    delete: function (req, res) {
        CadastroTecnicoService.deleteCadastroTecnicoPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroTecnicoNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
