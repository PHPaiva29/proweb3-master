<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoResultado">
                <h1><em>Resultado de partidas</em></h1><br>
                <h4><em>Selecione um evento</em></h4>
                <b-form-group label="Evento:" label-for="evento-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoResultado.CadastroEventoNome" :options="evento" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Time A:" label-for="timeA-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoResultado.timeA" :options="time" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Pontos time A:" label-for="timeAPontos-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoResultado.timeAPontos" id="timeAPontos-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Time B:" label-for="timeB-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoResultado.timeB" :options="time" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Pontos time B:" label-for="timeBPontos-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoResultado.timeBPontos" id="timeBPontos-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Nomear Partida:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoResultado.nome" id="nome-input"></b-form-input>
                </b-form-group>
                <b-button type="submit">Cadastrar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {

    async asyncData({ $axios }) {
        let time = [
            { value: null, text: 'Por favor escolha um time' },
        ];
        let evento = [
            { value: null, text: 'Por favor escolha um evento' },
        ];
        try {
        const response = await $axios.$get('CadastroTime');
        response.forEach(element => {
            time.push(element["nome"]);
        });
        const eventoResponse = await $axios.$get('CadastroEvento');
        eventoResponse.forEach(element => {
            evento.push(element["nome"]);
        });
        } catch (ex) {
            console.log(ex);
        }
        return { time, evento };
    },
    name: "CadastroResultado",
    data: function () {
        return {
            novoResultado: {
                CadastroEventoNome: null,
                timeA: null,
                timeB: null,
                timeAPontos: "",
                timeBPontos: "",
                nome: ""
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    methods: {
        NovoResultado: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoResultado));
            this.$axios
                .$post("CadastroResultado", this.novoResultado)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-resultado');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo resultado');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-resultado');
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

