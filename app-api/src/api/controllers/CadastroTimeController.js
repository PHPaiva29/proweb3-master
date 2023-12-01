const CadastroTimeService = require("../services/CadastroTimeService");

module.exports = {
    //Pegar todas as infomaçoes
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return CadastroTimeRepository.all()
        // console.log(CadastroTimeRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        CadastroTimeService.getAllCadastroTime().then(
            time => {
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(time));
            }            
        )
    },
    // Adicionar Time
    post: function (req, res) {
        CadastroTimeService.postNewCadastroTime(
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
        const CadastroTimeNome = req.params.CadastroTime_nome;
        CadastroTimeService.getCadastroTimePorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            CadastroTimeNome).then((time) => {
                if(time){
                    res.statusCode = 200; // Status HTTP para OK;
                    res.set("Content-Type", "application/json");
                    res.send(JSON.stringify(time));                    
                } else{
                    res.statusCode = 404; // Status HTTP para No Found;
                    res.set("Content-Type", "application/json");
                    res.send({status: `Não foi possível encontrar esse time ${CadastroTimeNome}.`});
                }                
            });
    },
    //Remove time
    delete: function (req, res) {
        CadastroTimeService.deleteCadastroTimePorNome(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
            req.params.CadastroTimeNome).then((status) => {
                res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
                res.set("Content-Type", "application/json");
                res.send(JSON.stringify(status));
            }
        );
    }
}
