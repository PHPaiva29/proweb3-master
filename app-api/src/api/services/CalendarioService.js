
//const CalendarioRepository = require("../repositories/CalendarioRepository");

module.exports = {
    getCalendarioPorData: async function (CalendarioData){
        const data = await CalendarioRepository.find(CalendarioData)
        return data;
    },

    postNewCalendario: async function (calendario){
        let model = new CalendarioRepository();
        // const data = await CalendarioRepository.create(calendario);
        const data = await model.create(calendario);
        //colocar no banco
        if(data) return {status: "Data cadastrada com sucesso."}
        else return {status: "Não foi possível cadastrar nessa data"}
    },
    
    deleteCalendarioPorData: async function(CalendarioData) {
        const status = await CalendarioRepository.remove(CalendarioData);
        if(status) return {status: "Data removida com sucesso."}
        else return {status: "Data não encontrado."}
    }
}