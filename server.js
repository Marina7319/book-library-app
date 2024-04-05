var express = require('express');
var server = express();
var mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');

const cors = require('cors');

server.use(cors(
    {
        origin: "http://localhost:4200"
    }
 ));

var routes = require('./routes/routes');
server.listen(8000,function check(error)
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




server.use(express.json());
server.use(routes);