<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovaEstatistica">
                <h1><em>Estatisticas da partidas</em></h1><br>
                <h4><em>Selecione um evento</em></h4>
                <b-form-group label="Evento:" label-for="evento-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaEstatistica.CadastroEventoNome" :options="evento" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Partida:" label-for="partida-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaEstatistica.partidaNome" :options="partida" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Melhor Jogador:" label-for="melhorJogador-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novaEstatistica.melhorJogador" id="melhorJogador-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Quantidade de pontos:" label-for="quantidadePontos-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novaEstatistica.quantidadePontos" id="quantidadePontos-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Faltas:" label-for="faltas-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novaEstatistica.faltas" id="faltas-input"></b-form-input>
                </b-form-group>
                <b-button type="submit">Cadastrar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {

    async asyncData({ $axios }) {
        let partida = [
            { value: null, text: 'Por favor escolha uma partida' },
        ];
        let evento = [
            { value: null, text: 'Por favor escolha um evento' },
        ];
        try {
        const response = await $axios.$get('CadastroResultado');
        response.forEach(element => {
            partida.push(element["nome"]);
        });
        const eventoResponse = await $axios.$get('CadastroEvento');
        eventoResponse.forEach(element => {
            evento.push(element["nome"]);
        });
        } catch (ex) {
            console.log(ex);
        }
        return { partida, evento };
    },
    name: "CadastroEstatisticas",
    data: function () {
        return {
            novaEstatistica: {
                CadastroEventoNome: null,
                partidaNome: null,
                melhorJogador: "",
                quantidadePontos: "",
                faltas: ""
            },
        };
    },
    methods: {
        NovaEstatistica: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novaEstatistica));
            this.$axios
                .$post("CadastroEstatisticas", this.novaEstatistica)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-nova-estatistica');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar uma nova estatistica');
                    console.log(error);
                    this.$bvModal.hide('modal-nova-estatistica');
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

