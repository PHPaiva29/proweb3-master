
const {CadastroEsportes} = require("../../database/models")

module.exports = {
    getAllCadastroEsportes: async function (){
        const data = await CadastroEsportes.findAll();
        return data;
    },

    getCadastroEsportesPorNome: async function (CadastroEsportesNome){
        const data = await CadastroEsportes.findOne({ where: { nome: CadastroEsportesNome }})
        return data;
    },

    postNewCadastroEsportes: async function (esporte){
        const data = await CadastroEsportes.create(esporte);
        //colocar no banco
        if(data) return {status: "Esporte cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o esporte"}
    },
    
    deleteCadastroEsportesPorNome: async function(CadastroEsportesNome) {
        const status = await CadastroEsportes.destroy(CadastroEsportesNome);
        if(status) return {status: "Esporte removido com sucesso."}
        else return {status: "Esporte não encontrado."}
    }
}