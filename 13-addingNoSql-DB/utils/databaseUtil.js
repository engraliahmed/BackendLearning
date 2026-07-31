const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL = ""

const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL)
        .then((client) => {
            console.log(client);
            callback(client);
        })
        .catch((err) => {
            console.log("Error while connecting mongo", err);
        });
};

module.exports = mongoConnect;
