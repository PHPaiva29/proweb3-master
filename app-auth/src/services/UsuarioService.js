require('dotenv').config();
// This will help us connect to the database
//const dbo = require('../database/conn');
const {ObjectId} = require("mongodb");
const collName = 'usuarios';

module.exports = {
    async criar(matchUser, callbackAtlasResponse) {
        //const databaseConnect = dbo.getDatabase();

        await databaseConnect
            .collection(collName)
            .insertOne(matchUser, callbackAtlasResponse);
    },

    async deletarUsuarioPorNome(req, res, next) {

    },

    async update(req, res, next) {

    },

    async getUsuarioPorId(id){
        // const databaseConnect = dbo.getDatabase();
        // return await databaseConnect
        //     .collection(collName)
        //     .findOne(
        //         {
        //             // Quando buscar por Id, é importante encapusalar o Id dentro de um objeto ObjectId
        //             // ver mais em https://www.mongodb.com/docs/manual/reference/method/ObjectId/ 
        //             _id: ObjectId(usuarioId)
        //         }
        //     );
        return {
            id: id,
            username: "renato",
            password: "123"
        }
    },

    async getPorUsuarioNome(username) {
        // const databaseConnect = dbo.getDatabase();

        // return await databaseConnect
        //     .collection(collName)
        //     .findOne(
        //         // {
        //         //     $where: () => {
        //         //         return this.username == username 
        //         //     }
        //         // }
        //         {
        //             username:username
        //         }
        //         // projection configura quais campos irão ser retornados pelo MongDB
        //         // , {
        //         // projection: {
        //         //     _id: 1,
        //         //     username: 1,
        //         //     pwd: 1,
        //         // }
        //     );
    },
}