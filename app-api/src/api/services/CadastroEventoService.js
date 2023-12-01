
const {CadastroEvento} = require("../../database/models");

module.exports = {
    getAllCadastroEvento: async function (){
        const data = await CadastroEvento.findAll();
        return data;
    },

    getCadastroEventoPorNome: async function (CadastroEventoNome){
        const data = await CadastroEvento.findOne({ where: { nome: CadastroEventoNome }})
        return data;
    },

    postNewCadastroEvento: async function (evento){
        const data = await CadastroEvento.create(evento);
        //colocar no banco
        if(data) return {status: "Evento cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar um evento"}
    },
    
    deleteCadastroEventoPorNome: async function(CadastroEventoNome) {
        const status = await CadastroEvento.destroy(CadastroEventoNome);
        if(status) return {status: "Evento removido com sucesso."}
        else return {status: "Evento não encontrado."}
    }
}