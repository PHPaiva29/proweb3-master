<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoTecnico">
                <h1><em>Cadastro de Tecnico</em></h1><br>
                <h4><em>Selecione um esporte</em></h4>
                <b-form-group label="Esporte:" label-for="esporte-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoTecnico.esporte" :options="esportesNome" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <br><h4><em>Dados pessoais</em></h4>
                <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoTecnico.nome" id="nome-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Telefone:" label-for="telefone-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoTecnico.telefone" id="telefone-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Email:" label-for="email-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoTecnico.email" id="email-input"></b-form-input>
                </b-form-group>
                <b-button type="submit">Cadastrar</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {

    async asyncData({ $axios }) {
        let esportes, totalRows, esportesNome = [
            { value: null, text: 'Por favor escolha um esporte' },
        ];
        try {
        const response = await $axios.$get('CadastroEsportes');
        esportes = response;
        response.forEach(element => {
            esportesNome.push(element["nome"]);
        });

        } catch (ex) {
            console.log(ex);
        }
        console.log(esportesNome);
        return { esportesNome };
    },
    name: "CadastroTecnico",
    data: function () {
        return {
            novoTecnico: {
                esporte: null,
                nome: "",
                telefone: "",
                email: ""
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    methods: {
        NovoTecnico: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoTecnico));
            this.$axios
                .$post("CadastroTecnico", this.novoTecnico)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-tecnico');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo tecnico');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-tecnico');
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

