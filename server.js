// const express = require('express');
// const http = require('http');
// const https = require('https');
// const fs = require('fs');
// const CONFIG = require('./config');
// const path = require('path');
// const mongoose = require('mongoose');
// const DatabaseConnector = require("./db-connect");

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import farmerRoutes from './routes/farmerRoutes.js';
import buyerRoutes from './routes/buyerRoutes.js';
import postRoutes from './routes/postRoutes.js';
import productRoutes from './routes/productsRoutes.js';

dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());

// set up database connection and create database
// const dbConnector = new DatabaseConnector();
// dbConnector.connect()
// const nameSchema = new mongoose.Schema({
//     firstName: {
//         type:String,
//         required:[true,'First name is required']
//     },
//     lastName: {
//         type:String,
//         required:[true,'Last name is required']
//     }
// });
// dbConnector.createCollection("Person", nameSchema);
// dbConnector.addDataToCollection("Person", {
//     firstName: "John",
//     lastName: "Doe"
// });

// static path dir
// app.use(
//   '/static',
//   express.static(path.join(__dirname, CONFIG.server.static_dir))
// );

app.get('/', (req, res) => {
  res.send('API running');
});

app.use('/api/farmer', farmerRoutes);
app.use('/api/buyer', buyerRoutes);
app.use('/api/post', postRoutes);
app.use('/api/products', productRoutes);

// const privateKey = fs.readFileSync('certificates/key.pem', 'utf-8');
// const certificate = fs.readFileSync('certificates/cert.pem', 'utf-8');

// var credentials = { key: privateKey, cert: certificate };

// // The https server
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(CONFIG.server.https.port);
// console.log('Started HTTPS server on ', CONFIG.server.https.port);

// creating the http server
// http.createServer(app).listen(CONFIG.server.http.port);
// console.log('Started http server on ', CONFIG.server.http.port);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/collection', (req, res) => {
//   let collection_name = req.query.name;
//   if (collection_name === undefined) {
//     res.end(
//       JSON.stringify({
//         status: false,
//         error: 403,
//         msg: 'Collection name not provided',
//       })
//     );
//   } else {
//     const d = dbConnector.serializeCollection(collection_name, res);
//     return d;
//   }
// });

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`.green.bold
  )
);
