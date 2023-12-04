
const {CadastroImprensa} = require("../../database/models")

module.exports = {
    getAllCadastroImprensa: async function (){
        const data = await CadastroImprensa.findAll();
        return data;
    },

    getCadastroImprensaPorNome: async function (CadastroImprensaNome){
        const data = await CadastroImprensa.findOne({ where: { nome: CadastroImprensaNome }})
        return data;
    },

    postNewCadastroImprensa: async function (imprensa){
        const data = await CadastroImprensa.create(imprensa);
        //colocar no banco
        if(data) return {status: "Imprensa cadastrada com sucesso."}
        else return {status: "Não foi possível cadastrar a imprensa"}
    },
    
    deleteCadastroImprensaPorNome: async function(CadastroImprensaNome) {
        const status = await CadastroImprensa.destroy(CadastroImprensaNome);
        if(status) return {status: "Imprensa removida com sucesso."}
        else return {status: "Imprensa não encontrada."}
    }
}