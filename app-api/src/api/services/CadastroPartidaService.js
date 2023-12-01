
const {CadastroPartida} = require("../../database/models")

module.exports = {
    getAllCadastroPartida: async function (){
        const data = await CadastroPartida.findAll();
        return data;
    },

    getCadastroPartidaPorId: async function (CadastroPartidaId){
        const data = await CadastroPartida.findOne({ where: { id: CadastroPartidaId }})
        return data;
    },

    postNewCadastroPartida: async function (partida){
        const data = await CadastroPartida.create(partida);
        //colocar no banco
        if(data) return {status: "Partida cadastrada com sucesso."}
        else return {status: "Não foi possível cadastrar a partida"}
    },
    
    deleteCadastroPartidaPorId: async function(CadastroPartidaId) {
        const status = await CadastroPartida.destroy(CadastroPartidaId);
        if(status) return {status: "Partida removida com sucesso."}
        else return {status: "Partida não encontrada."}
    }
}