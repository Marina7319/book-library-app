var express = require('express');
var server = express();
var routes = require('./routes/routes');

var mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');
var routes = require('./routes/routes');
server.listen(8000, function check(error)
{
    if(error)
    {
        console.log("errorr");
    }
    else 
    {
        console.log("started");
    }
});

mongoose.connect("mongodb://localhost:27017/library",{useNewUrlParser: true, useUnifiedTopology: true }, function checkDB(error)
{
    if(error)
    {
        console.log("errorr");
    }
    else 
    {
        console.log("started");
    }
});


// server.use(routes);
 server.use(cors(
    {
        origin: "http://localhost:4200"
    }
 ));



server.use(express.json());
server.use(routes);