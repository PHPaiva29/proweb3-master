<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovaPartida">
                <h1><em>Cadastro de Partida</em></h1><br>
                <h4><em>Dados da Partida</em></h4>
                <b-form-group label="Evento:" label-for="evento-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaPartida.eventoNome" :options="evento" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Time A:" label-for="timeA-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaPartida.timeA" :options="time" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Time B:" label-for="timeB-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaPartida.timeB" :options="time" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Tecnico A:" label-for="tecnicoA-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaPartida.tecnicoA" :options="tecnicoNome" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <b-form-group label="Tecnico B:" label-for="tecnicoB-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novaPartida.tecnicoB" :options="tecnicoNome" size="sm" class="mt-3"></b-form-select>
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
        let tecnicoNome = [
            { value: null, text: 'Por favor escolha um tecnico' },
        ];
        let evento = [
            { value: null, text: 'Por favor escolha um evento' },
        ];
        try {
        const response = await $axios.$get('CadastroTime');
        response.forEach(element => {
            time.push(element["nome"]);
        });
        const tecnicoResponse = await $axios.$get('CadastroTecnico');
        tecnicoResponse.forEach(element => {
            tecnicoNome.push(element["nome"]);
        });
        const eventoResponse = await $axios.$get('CadastroEvento');
        eventoResponse.forEach(element => {
            evento.push(element["nome"]);
        });
        } catch (ex) {
            console.log(ex);
        }
        return { time,tecnicoNome,evento };
    },
    name: "CadastroPartida",
    data: function () {
        return {
            novaPartida: {
                eventoNome: null,
                timeA: null,
                timeB: null,
                tecnicoA: null,
                tecnicoB: null
            },
        };
    },
    methods: {
        NovaPartida: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novaPartida));
            this.$axios
                .$post("CadastroPartida", this.novaPartida)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-nova-partida');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar uma nova partida');
                    console.log(error);
                    this.$bvModal.hide('modal-nova-partida');
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

