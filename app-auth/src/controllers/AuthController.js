const UsuarioService = require("../services/UsuarioService");
const utils = require("../utils/utils");

module.exports = {
    async doLogin(req, res) {
        if (req.body.hasOwnProperty('username')) {
            const usuarioLogin = await UsuarioService.getPorUsuarioNome(req.body.username);

            if (usuarioLogin) {
                console.log(usuarioLogin);
                const authenticated = await utils.comparePwd(req.body.pwd, usuarioLogin.pwd);
                if (authenticated) {
                    const token = utils.signJwt(usuarioLogin._id);
                    res.set('Authorization', `Bearer ${token}`);
                    res.status(200).send(usuarioLogin);
                }
            } else {
                res.status(400).send("Senha e/ou usuário incorretos");
            }
        } else {
            res.status(400).send("Objeto de requisição deve conter um atributo username");
        }
    },

    doLogout(req, res) {
        res.set('Auth', `Bearer `);
        res.status(200).send();
    },
}