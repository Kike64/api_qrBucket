require('dotenv').config();
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var referenciaRoutes = require('./routes/referenciaRoute');
const fs = require("fs");

const PORT = process.env.PORT;

app.use(bodyparser.json());
app.use('/api', referenciaRoutes);

if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})