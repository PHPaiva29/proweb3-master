const CadastroEventoService = require("../services/CadastroEventoService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroTimeRepository.all()
        // console.log(CadastroTimeRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroEventoService.getAllCadastroEvento().then(
            evento => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(evento));
            }            
        )
    },
    // Adicionar Evento
    post: function (req, res) {
        CadastroEventoService.postNewCadastroEvento(
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
        const CadastroEventoNome = req.params.CadastroEvento_nome;
        CadastroEventoService.getCadastroEventoPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroEventoNome).then((evento) => {
                if(evento){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(evento));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse evento ${CadastroEventoNome}.`});
                }                
            });
    },
    //Remove evento
    delete: function (req, res) {
        CadastroEventoService.deleteCadastroEventoPorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroEsportesId).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
