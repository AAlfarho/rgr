"use strict"
//var schema = require('./data/schema');
//var express = require('express');
//var path = require('path');
//let MongoClient = require("mongodb").MongoClient
//let GraphQLHTTP = require('express-graphql');
import schema from './data/schema';
import express  from 'express';
import path from 'path';
import {MongoClient} from 'mongodb';
import GraphQLHTTP from 'express-graphql'


let app = express();
let db;


app.use(express.static(path.resolve(__dirname, 'public')));

/*
 We'll try to use the async/await to avoid callbacking in the Mongo connect,
*/
(async () => {
    let db = await MongoClient.connect(process.env.MONGO_URL);
    app.use('/graphql', GraphQLHTTP({
       schema: schema(db),
       graphiql: true
    }));
   
   app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", () => console.log("Server Running on Port " + process.env.PORT || 3000));
})();