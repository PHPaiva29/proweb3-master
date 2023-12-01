const UsuarioService = require("../services/UsuarioService");
const utils = require("../utils/utils");

module.exports ={
    async criarUsuario(req, res){
        const matchDocument = {
            username: req.body.username,
            email: req.body.email,
            pwd: await utils.encryptPwd(req.body.pwd), //Senha é salva criptografada com bcrypt
            created_in: new Date()
        };

        UsuarioService.criar(matchDocument, (err, result) => {
            if (err) {
              res.status(400).send('Erro ao criar um novo usuário!');
            } else {
              console.log(`Um novo usuário foi inserido com o id ${result.insertedId}`);
              res.status(204).send();
            }
         });
    },

    deleteUsuario(){

    },

    async getUsuario(req, res){
      const usuario = await UsuarioService.getUsuarioPorId(req.params.id);
      console.log(usuario);
      if(usuario){
        res.status(200).send(usuario);
      }else{
        res.status(404).send("Usuário não encontrado!");
      }
    },

    updateUsuario(){

    },
}