<template>
    <div id="default-body">
        <b-card bg-variant="light">
            <b-form @submit="NovaImprensa">
                <h1><em>Cadastro de Imprensa</em></h1><br>
                    <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                        <b-form-input v-model="novaImprensa.nome" id="nome-input"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Tipo:" label-for="tipo-input" label-cols-sm="2" label-align-sm="left">
                        <b-form-input list="my-list-id"></b-form-input>
                        <datalist id="my-list-id">
                            <option>Reportagem</option>
                            <option>Narração</option>
                            <option>Câmera/Imagem</option>
                            <option v-for="size in sizes">{{ size }}</option>
                        </datalist>
                    </b-form-group>
                <b-button type="submit">Cadastrar Imprensa</b-button>
            </b-form>
        </b-card>

    </div>
</template>

<script>
    export default {
        name: "CadastroImprensa",
        data: function () {
            return {
                novaImprensa: {
                    nome: "",
                    tipo: ""
                }
            };
        },
        methods: {
        NovaImprensa: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novaImprensa));
            this.$axios
                .$post("CadastroImprensa", this.novaImprensa)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-nova-imprensa');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível cadastrar uma nova imprensa');
                    console.log(error);
                    this.$bvModal.hide('modal-nova-imprensa');
                    this.show = false;
                });
            },
        } 
    }
</script>

<style>
#default-body {
    max-width: 550px;
    margin: auto;
    margin-top: 100px;
}
</style>

