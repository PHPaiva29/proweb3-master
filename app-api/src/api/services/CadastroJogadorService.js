
const {CadastroJogador} = require("../../database/models")

module.exports = {
    getAllCadastroJogador: async function (){
        const data = await CadastroJogador.findAll();
        return data;
    },

    getCadastroJogadorPorNome: async function (CadastroJogadorNome){
        const data = await CadastroJogador.findOne({ where: { nome: CadastroJogadorNome }})
        return data;
    },

    postNewCadastroJogador: async function (jogador){
        const data = await CadastroJogador.create(jogador);
        //colocar no banco
        if(data) return {status: "Jogador cadastrado com sucesso."}
        else return {status: "Não foi possível cadastrar um jogador"}
    },
    
    deleteCadastroJogadorPorNome: async function(CadastroJogadorNome) {
        const status = await CadastroJogador.destroy(CadastroJogadorNome);
        if(status) return {status: "Jogador removido com sucesso."}
        else return {status: "Jogador não encontrado."}
    }
}