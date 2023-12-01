<template>
    <div id="default-body">
        <b-card bg-variant="light">
            <b-form @submit="NovoEsporte">
                <h1><em>Cadastro de Esporte</em></h1><br>
                    <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                        <b-form-input v-model="novoEsporte.nome" id="nome-input"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Descrição:" label-for="desc-input" label-cols-sm="2" label-align-sm="left"
                        description="Descreva sucintamente o esporte que deseja adicionar.">
                        <b-form-input v-model="novoEsporte.descricao" id="desc-input"></b-form-input>
                    </b-form-group>
                <b-button type="submit">Cadastrar Esporte</b-button>
            </b-form>
        </b-card>

    </div>
</template>

<script>
export default {
    name: "CadastroEsportes",
    data: function () {
        return {
            novoEsporte: {
                nome: "futebol",
                descricao: "Composto por x jogadores em cada time..."
            }
        };
    },
    methods: {
        NovoEsporte: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoEsporte));
            this.$axios
                .$post("CadastroEsportes", this.novoEsporte)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-esporte');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível criar um novo esporte');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-esporte');
                    this.show = false;
                });
            },
        }
    }
    
/*
async asyncData({ $axios }) {
    let items, totalRows;
    try {
    const response = await $axios.$get('patrimonio');
    items = response;
    totalRows = items.length;
} catch (ex) {
    console.log(ex);
}
return { items, totalRows }
},
*/
//Exemplo do professor // Não entendi essa parte :(
    // async asyncData({ $axios }) {
//     let items, totalRows;
//     try {
    //         // não era para ser uma url ?
//         const response = await $axios.$get('esporte');
//         items = response;
//         totalRows = items.length;
//     } catch (ex) {
    // console.log(ex);
    //     }
    //     return { items, totalRows }
    // },
</script>

<style>
#default-body {
    max-width: 550px;
    margin: auto;
    margin-top: 100px;
}
</style>

