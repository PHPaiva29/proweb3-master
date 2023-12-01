<template>
    <div>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <h1> Cadastro de locais para os jogos </h1>
        <form @submit="NovoLocal">
            <!-- ESPORTE -->
            <fieldset>
                <legend>Selecione o esporte</legend>
                <table cellspacing="10">
                    <tr>
                        <td>
                            <label for="esporte">Esporte:</label>
                        </td>
                        <td align="left">
                            <select name="esporte">
                                <option value= 1 >Futebol</option>
                                <option value= 2 >Basquete</option>
                                <option value= 3 >Volei</option>
                                <option value= 4 >Handebol</option>
                                <option value= 5 >Futsal</option>
                                <option value= 5 >ESports</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <br />
            <!-- DADOS DOS LOCAIS -->
            <fieldset>
                <legend>Dados do Local</legend>
                <table cellspacing="10">
                    <tr>
                        <td>
                            <label for="nome">Nome: </label>
                        </td>
                        <td align="left">
                            <input type="text" name="nomeLocal" v-model=novoLocal.nome>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="rua">Rua:</label>
                        </td>
                        <td align="left">
                            <input type="text" name="rua" v-model=novoLocal.rua>
                        </td>
                        <td>
                            <label for="numero">Numero:</label>
                        </td>
                        <td align="left">
                            <input type="text" name="numero" size="4" v-model=novoLocal.numero>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="bairro">Bairro: </label>
                        </td>
                        <td align="left">
                            <input type="text" name="bairro" v-model=novoLocal.bairro>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="cidade">Cidade: </label>
                        </td>
                        <td align="left">
                            <input type="text" name="cidade" v-model=novoLocal.cidade>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="cep">CEP: </label>
                        </td>
                        <td align="left">
                            <input type="text" name="cep" size="8" maxlength="8" v-model=novoLocal.cep>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <br />
            <input type="submit" value="Cadastrar">
            <input type="reset" value="Limpar">
        </form>
    </div>
</template>

<script>
export default {
    name: "CadastroLocal",
    data: function () {
        return {
            novoLocal: {
                nome: "nome exemplo",
                rua: "rua exemplo",
                numero: "0000",
                bairro: "bairro exemplo",
                cidade: "cidade exemplo",
                cep: "00000-000"
            },
        };
    },
    methods: {
        NovoLocal: function (event) {
            event.preventDefault();
            console.log(JSON.stringify(this.novoLocal));
            this.$axios
                .$post("CadastroLocal", this.novoLocal)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-local');
                    this.show = false;
                    this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível cadastrar um novo local');
                    console.log(error);
                    this.$bvModal.hide('modal-novo-local');
                    this.show = false;
                });
        },
    }
}

</script>