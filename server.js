"use strict"
var express = require('express');
var path = require('path');
let MongoClient = require("mongodb").MongoClient

let app = express();
let db;

app.use(express.static(path.resolve(__dirname, 'public')));
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
   if (err) throw err
   
   db = database;
   app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => console.log("Server Running on Port " + process.env.PORT || 3000));
});

app.get('/data/links', (req, res) => {
      db.collection('links').find({}).toArray((err, links) => {
       if (err) throw err
       
       res.json(links);
   }); 
});