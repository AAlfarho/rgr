"use strict"
import schema from './data/schema';
var express = require('express');
var path = require('path');
let MongoClient = require("mongodb").MongoClient
let GraphQLHTTP = require('express-graphql');

let app = express();
let db;


app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/graphql', GraphQLHTTP({
    schema
}));
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