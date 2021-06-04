const MongoClient = require('mongodb').MongoClient;
const {MONGO_DB_URL, DB_NAME} = process.env;

let db;
async function connDb() {
    if (db) {
        return db;
    }
    return await MongoClient.connect(MONGO_DB_URL).then(client => {
        db = client.db(DB_NAME);
        return db;
    });
}

module.exports = {connDb}