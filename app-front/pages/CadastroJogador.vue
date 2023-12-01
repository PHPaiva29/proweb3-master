<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoJogador">
                <h1><em>Cadastro de Jogador</em></h1><br>
                <h4><em>Selecione um esporte</em></h4>
                <b-form-group label="Esporte:" label-for="esporte-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoJogador.esporte" :options="esportesNome" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <h4><em>Selecione um time</em></h4>
                <b-form-group label="Time:" label-for="time-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoJogador.time" :options="timeNome" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <br><h4><em>Dados pessoais</em></h4>
                <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoJogador.nome" id="nome-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Telefone:" label-for="telefone-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoJogador.telefone" id="telefone-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Email:" label-for="email-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoJogador.email" id="email-input"></b-form-input>
                </b-form-group>
                <b-button type="submit">Cadastrar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {

    async asyncData({ $axios }) {
        let esportesNome = [
            { value: null, text: 'Por favor escolha um esporte' },
        ];
        let timeNome = [
            { value: null, text: 'Por favor escolha um time' },
        ];
        try {
        const response = await $axios.$get('CadastroEsportes');
        response.forEach(element => {
            esportesNome.push(element["nome"]);
        });
        const TimeResponse = await $axios.$get('CadastroTime');
        TimeResponse.forEach(element => {
            timeNome.push(element["nome"]);
        });
        } catch (ex) {
            console.log(ex);
        }
        return { esportesNome,timeNome };
    },
    
    name: "CadastroJogador",
    data: function () {
        return {
            novoJogador: {
                nome: "",
                esporte: null,
                time: null,
                telefone: "",
                email: ""
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    methods: {
        NovoJogador: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoJogador));
            this.$axios
                .$post("CadastroJogador", this.novoJogador)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-jogador');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo jogador');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-jogador');
                    this.show = false;
                });
        },


    }
}

</script>

<style>
#default-body {
    max-width: 650px;
    margin: auto;
    margin-top: 100px;
}
</style>

