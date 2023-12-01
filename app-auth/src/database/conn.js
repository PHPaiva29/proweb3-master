//const { MongoClient } = require("mongodb");
require('dotenv').config();

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let databaseConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, database) {
      if (err || !database) {
        return callback(err);
      }

      databaseConnection = database.database("proweb3_usuarios");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDatabase: function () {
    return databaseConnection;
  },
};