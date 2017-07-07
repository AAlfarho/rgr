"use strict"
var express = require('express');
var path = require('path');

let app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => res.send('hello yolo'));
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");