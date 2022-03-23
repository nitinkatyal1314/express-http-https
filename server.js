const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const CONFIG = require('./config');
const path = require('path');
const mongoose = require('mongoose');
const DatabaseConnector = require("./db-connect");

// set up database connection and create database
const dbConnector = new DatabaseConnector();
dbConnector.connect()
const nameSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true,'First name is required']
    },
    lastName: {
        type:String,
        required:[true,'Last name is required']
    }
});
dbConnector.createCollection("Person", nameSchema);
dbConnector.addDataToCollection("Person", {
    firstName: "John",
    lastName: "Doe"
});


const app = express();

// static path dir
app.use("/static",express.static(path.join(__dirname, CONFIG.server.static_dir)));

const privateKey = fs.readFileSync('certificates/key.pem', 'utf-8');
const certificate = fs.readFileSync('certificates/cert.pem', 'utf-8');

var credentials = { key: privateKey, cert: certificate };

// The https server
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(CONFIG.server.https.port);
console.log("Started HTTPS server on ", CONFIG.server.https.port);

// creating the http server
http.createServer(app).listen(CONFIG.server.http.port);
console.log("Started http server on ", CONFIG.server.http.port);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/collection', (req, res) => {
    let collection_name = req.query.name;
    if (collection_name === undefined) {
        res.end(JSON.stringify({status: false, error: 403, msg: 'Collection name not provided'}));
    }
    else {
        const d = dbConnector.serializeCollection(collection_name, res);
        return d;
    }
});

