<template>
    <b-row class="vh-100 vw-100 row-login">
        <b-col sm="5" class="d-flex justify-content-center align-items-center left-login">
            <div class="login">
                <h2 class="text-center mb-5 title-login">Faça o login</h2>
  		        <b-form @submit="doLogin">
                <b-form-group
                    id="user-label"
                    label="Email:"
                    label-for="user-input"
                    description="Nunca iremos dar sua senha a terceiros"
                >
                    <b-form-input
                        id="user-input"
                        v-model="login.user"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    id="password-label"
                    label="Senha:"
                    label-for="password-input"
                    description="Coloque a senha."
                >
                    <b-form-input
                        id="password-input"
                        v-model="login.pwd"
                        type="password"
                        placeholder="Coloque a senha"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit">Entrar</b-button>
                </b-form>
            </div>
        </b-col>
        <b-col sm="7" class="d-flex justify-content-center align-items-center">
            <img src="../static/Login.svg"/>
        </b-col>
    </b-row>
  </template>

<script>
export default {
    name: "Login",
    data(){
        return{
            login:{
                user:"user@email.com",
                pwd:"123"
            }
        };
    },

    /*methods:{
        doLogin(){
            let dataLogin = {
                user: this.login.user,
                pwd: this.login.pwd
            };
            this.$http.post("/api/login", dataLogin).then(response=> {
                console.log(response.data);
                this.$router.push("/");
            })
            .catch(errors=>{
                console.error("Falha no login")
                console.log(errors)
            });
        }
        */
       methods: {
           doLogin: function (event) {
                event.preventDefault();
                console.log(JSON.stringify(this.login));
                this.$axios
                .$post("Login", this.login)
                .then((response) => {
                    console.log('Resposta do servidor obtida');
                    this.$bvModal.hide('modal-novo-login');
                    this.show = false;
                    //this.updateItemList();
                })
                .catch((error) => {
                    console.error('Não foi possível efetuar login');
                        console.log(error);
                        this.$bvModal.hide('modal-novo-login');
                        this.show = false;
                });
            },
        } 
};
</script>

<style>
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
  
.row-login {
    margin-left: 0;
}
  
.left-login {
    background-color: #F2F2F2;
    max-width: 350px;
}
  
.title-login {
    font-weight: bold;
}
  
img {
    width: auto;
    height: auto;
}
</style>