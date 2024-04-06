var express = require('express');
var server = express();
var routes = require('./routes/routeBook');
const cors = require('cors');

var mongoose = required('mongoose');
mongoose.connect("mongodb://localhost:27017/library",
{useNewUrlParser: true, useUnifiedTopology: true }, function checkDB() { 
    if(error)
    {
        console.log("error")
    } else { 
        console.log("DB Connected!");
    }
});


server.use(express.json());

server.use(routes);
server.use(cors);
server.listen(8000, function check(error) {
    if(error){
        console.log("error")
    } else { 
        console.log("starteddd")
    }
});


