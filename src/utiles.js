const mongoDB = require("mongodb"),
MongoClient = mongoDB.MongoClient,
mongoURL = "mongodb://localhost:27017/",
collName = "teams_array",
dbName = "nba_games";

function getgames(res) {
    MongoClient.connect(mongoURL)
        .then((db) => {
            const dbo = db.db(dbName)
            dbo.collection(collName).find({}).toArray()
                .then(docs => res.send(docs))
        })
        .catch((err) => {
            throw err
        })
}

module.exports = {getgames}