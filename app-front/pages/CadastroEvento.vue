<template>
    <div id="default-body">
        <b-card bg-variant="light" >
            <b-form @submit="NovoEvento">
                <h1><em>Cadastro de Eventos</em></h1><br>
                <h4><em>Selecione um esporte</em></h4>
                <b-form-group label="Esporte:" label-for="esporte-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.esporte" :options="esportesNome" size="sm" class="mt-3"></b-form-select>
                </b-form-group>
                <br><h4><em>Dados do evento</em></h4>
                <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-input v-model="novoEvento.nome" id="nome-input"></b-form-input>
                </b-form-group>
                <b-form-group label="Data:" label-for="data-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-datepicker v-model="novoEvento.data" id="data-input"></b-form-datepicker>
                </b-form-group>
                <b-form-group label="Hora:" label-for="hora-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-timepicker v-model="novoEvento.hora" id="hora-input"></b-form-timepicker>
                </b-form-group>
                <b-form-group label="Local:" label-for="local-input" label-cols-sm="2" label-align-sm="left">
                    <b-form-select v-model="novoEvento.local" :options="local" size="sm" class="mt-3"></b-form-select>
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
        try {
        const response = await $axios.$get('CadastroEsportes');
        // totalRows = esportes.length;
        // for (let i=0;i<totalRows;i++) {
        //     esportesNome[i] = esportes.nome[i];
        // }
        
        //response.forEach((element, index) => {
        //    esportesNome.push(
        //        {
        //            value: index,
        //            text: element["nome"]
        //        });
        //});
        response.forEach(element => {
            esportesNome.push(element["nome"]);
        });

        } catch (ex) {
            console.log(ex);
        }
        console.log(esportesNome);
        return { esportesNome };
        // return { esportes }
    },

    name: "CadastroEvento",
    data: function () {
        return {
            novoEvento: {
                esporte: null,
                nome: "",
                data: "",
                hora: "",
                local: ""
            },
            //exemploLocal: [{text: 'Selecione um local', value: null}, 'Praia','São lourenço','Bragantino','Lago']
        };
    },
    computed:{
        optionsSports(){
            return [

            ]
        }
    },
    methods: {
        NovoEvento: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoEvento));
            this.$axios
                .$post("CadastroEvento", this.novoEvento)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-evento');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo evento');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-evento');
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

