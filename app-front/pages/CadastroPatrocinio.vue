<template>
    <div id="default-body">
        <b-card bg-variant="light">
            <b-form @submit="NovoPatrocinio">
                <h1><em>Cadastro de Patrocínio</em></h1><br>
                    <b-form-group label="Nome:" label-for="nome-input" label-cols-sm="2" label-align-sm="left">
                        <b-form-input v-model="novoPatrocinio.nome" id="nome-input"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Descrição:" label-for="desc-input" label-cols-sm="2" label-align-sm="left"
                        description="Descreva sucintamente o tipo de patrocínio.">
                        <b-form-input v-model="novoPatrocinio.descricao" id="desc-input"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Valor:" label-for="valor-input" label-cols-sm="2" label-align-sm="left">
                        <b-form-input v-mask="'XXX.XXX.XXX,XX'" v-model="novoPatrocinio.valor" id="valor-input"></b-form-input>
                    </b-form-group>
                <b-button type="submit">Cadastrar Patrocínio</b-button>
            </b-form>
        </b-card>

    </div>
</template>

<script>
export default {
    name: "CadastroPatrocinio",
    data: function () {
        return {
            novoPatrocinio: {
                nome: "",
                descricao: "",
                valor:""
            }
        };
    },
    methods: {
        NovoPatrocinio: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoPatrocinio));
            this.$axios
                .$post("CadastroPatrocinio", this.novoPatrocinio)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-patrocinio');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível cadastrar um novo patrocinador');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-patrocinio');
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

