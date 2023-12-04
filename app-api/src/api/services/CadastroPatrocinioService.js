
const {CadastroPatrocinio} = require("../../database/models")

module.exports = {
    getAllCadastroPatrocinio: async function (){
        const data = await CadastroPatrocinio.findAll();
        return data;
    },

    getCadastroPatrocinioPorNome: async function (CadastroPatrocinioNome){
        const data = await CadastroPatrocinio.findOne({ where: { nome: CadastroPatrocinioNome }})
        return data;
    },

    postNewCadastroPatrocinio: async function (patrocinio){
        const data = await CadastroPatrocinio.create(patrocinio);
        //colocar no banco
        if(data) return {status: "Patrocinador cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o patrocinador"}
    },
    
    deleteCadastroPatrocinioPorNome: async function(CadastroPatrocinioNome) {
        const status = await CadastroPatrocinio.destroy(CadastroPatrocinioNome);
        if(status) return {status: "Patrocinador removido com sucesso."}
        else return {status: "Patrocinador não encontrado."}
    }
}