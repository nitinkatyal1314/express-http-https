const mongoose = require('mongoose');
const CONFIG = require('./config');

class DatabaseConnector {

    constructor() {
        this.db_connection = null;
        this.collections = [];
    }

    connect() {
        const url = `mongodb://${CONFIG.mongo.host}:${CONFIG.mongo.port}/${CONFIG.mongo.dbname}`;
        mongoose.connect(url,
            {useNewUrlParser: true, useUnifiedTopology: true})

        this.db_connection = mongoose.connection;
        this.db_connection.on('error', console.error.bind(console, 'connection error:'));
        this.db_connection.once('open', function() {
            console.log("Connected to DB")
        });
    }

    dropConnection(){
        mongoose.connection.close();
    }

    dropCollection(collection_name) {
        const collection_model = this.findCollection(collection_name);
        if (collection_model !== null){
            collection_model.collection.drop();
            console.log("Collection dropped");
        }
    }

    addDataToCollection(collection_name, data){
        const collection_model = this.findCollection(collection_name);
        const document = new collection_model(data);
        collection_model.create(document, (err, d) => {
            if (err) console.error("Error creating record");
        })
    }

    createCollection(collection_name, schema) {
        const collection_model = mongoose.model(collection_name, schema);
        this.collections.push({
            "name": collection_name,
            "model": collection_model
        });
    }

    serializeCollection(collection_name, res) {
        const collection_model = this.findCollection(collection_name);
        collection_model.find().lean().exec(function (err, data) {
            return res.end(JSON.stringify(data));
        });
    }
}

DatabaseConnector.prototype.findCollection = function(collection_name){
    const collection = this.collections.filter((coll_obj) => {return coll_obj.name == collection_name});
    if (collection.length == 1) {
        return collection[0].model
    }
    else if (collection.length > 1){
        console.log("Muliple collections found for : ", collection_name);
        return null;
    }
    else {
        console.log("No collections found for : ", collection_name);
        return null;
    }
}

module.exports = DatabaseConnector;