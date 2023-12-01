<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoTime">
                <h1><em>Cadastro de Time</em></h1><br>
                <h4><em>Selecione um esporte</em></h4>
                <b-form-group label="Esporte:" label-for="esporte-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoTime.esporte" :options="esportesNome" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <br><h4><em>Dados do time</em></h4>
                <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoTime.nome" id="nome-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Tecnico:" label-for="tecnico-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoTime.tecnico" :options="tecnicoNome" size="sm" class="mt-3"></b-form-select>
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
        let tecnicoNome = [
            { value: null, text: 'Por favor escolha um tecnico' },
        ];
        try {
        const response = await $axios.$get('CadastroEsportes');
        response.forEach(element => {
            esportesNome.push(element["nome"]);
        });
        const TecnicoResponse = await $axios.$get('CadastroTecnico');
        TecnicoResponse.forEach(element => {
            tecnicoNome.push(element["nome"]);
        });
        } catch (ex) {
            console.log(ex);
        }
        return { esportesNome,tecnicoNome };
    },
    name: "CadastroTime",
    data: function () {
        return {
            novoTime: {
                esporte: null,
                nome: "",
                tecnico: null
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    methods: {
        NovoTime: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoTime));
            this.$axios
                .$post("CadastroTime", this.novoTime)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-time');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo time');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-time');
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

