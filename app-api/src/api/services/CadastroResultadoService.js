
const {CadastroResultado} = require("../../database/models")

module.exports = {
    getAllCadastroResultado: async function (){
        const data = await CadastroResultado.findAll();
        return data;
    },

    getCadastroResultadoPorNome: async function (CadastroResultadoNome){
        const data = await CadastroResultado.findOne({ where: { nome: CadastroResultadoNome }})
        return data;
    },

    postNewCadastroResultado: async function (resultado){
        const data = await CadastroResultado.create(resultado);
        //colocar no banco
        if(data) return {status: "Resultado cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar o Resultado"}
    },
    
    deleteCadastroResultadoPorNome: async function(CadastroResultadoNome) {
        const status = await CadastroResultado.destroy(CadastroResultadoNome);
        if(status) return {status: "Resultado removido com sucesso."}
        else return {status: "Resultado não encontrado."}
    }
}