
const {CadastroEstatisticas} = require("../../database/models");

module.exports = {
    getAllCadastroEstatisticas: async function (){
        const data = await CadastroEstatisticas.findAll();
        return data;
    },

    getCadastroEstatisticasPorId: async function (CadastroEstatisticasId){
        const data = await CadastroEstatisticas.findOne({ where: { id: CadastroEstatisticasId }})
        return data;
    },

    postNewCadastroEstatisticas: async function (estatisticas){
        const data = await CadastroEstatisticas.create(estatisticas);
        //colocar no banco
        if(data) return {status: "Estatistica cadastrada com sucesso."}
        else return {status: "Não foi possível cadastrar uma Estatistica"}
    },
    
    deleteCadastroEstatisticasPorId: async function(CadastroEstatisticasId) {
        const status = await CadastroEstatisticas.destroy(CadastroEstatisticasId);
        if(status) return {status: "Estatistica removida com sucesso."}
        else return {status: "Estatisticas não encontradas."}
    }
}