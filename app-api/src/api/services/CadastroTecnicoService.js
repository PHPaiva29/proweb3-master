
const {CadastroTecnico} = require("../../database/models")

module.exports = {
    getAllCadastroTecnico: async function (){
        const data = await CadastroTecnico.findAll();
        return data;
    },

    getCadastroTecnicoPorNome: async function (CadastroTecnicoNome){
        const data = await CadastroTecnico.findOne({ where: { nome: CadastroTecnicoNome }})
        return data;
    },

    postNewCadastroTecnico: async function (tecnico){
        const data = await CadastroTecnico.create(tecnico);
        //colocar no banco
        if(data) return {status: "Tecnico cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar um tecnico"}
    },
    
    deleteCadastroTecnicoPorNome: async function(CadastroTecnicoNome) {
        const status = await CadastroTecnico.destroy(CadastroTecnicoNome);
        if(status) return {status: "Tecnico removido com sucesso."}
        else return {status: "Tecnico não encontrado."}
    }
}