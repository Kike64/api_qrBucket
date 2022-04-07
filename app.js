require('dotenv').config();
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var referenciaRoutes = require('./routes/referenciaRoute')

const PORT = process.env.PORT;

app.use(bodyparser.json());
app.use('/api', referenciaRoutes);


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})