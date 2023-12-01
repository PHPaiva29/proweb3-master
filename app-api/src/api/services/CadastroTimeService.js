
const {CadastroTime} = require("../../database/models")

module.exports = {
    getAllCadastroTime: async function (){
        const data = await CadastroTime.findAll();
        return data;
    },

    getCadastroTimePorNome: async function (CadastroTimeNome){
        const data = await CadastroTime.findOne({ where: { nome: CadastroTimeNome }})
        return data;
    },

    postNewCadastroTime: async function (time){
        const data = await CadastroTime.create(time);
        //colocar no banco
        if(data) return {status: "Time cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar um time"}
    },
    
    deleteCadastroTimePorNome: async function(CadastroTimeNome) {
        const status = await CadastroTime.destroy(CadastroTimeNome);
        if(status) return {status: "Time removido com sucesso."}
        else return {status: "Time não encontrado."}
    }
}