var express = require('express');
var server = express();
var mongoose = require('mongoose');
//mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
var bodyparser = require('body-parser');
server.use(bodyparser.json());

server.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}));
server.use(cookieParser());

var routes = require('./routes/routes');
// server.listen(8000,function check(error)
// {
//     if(error)
//     {
//         console.log("errorr");
//     }
//     else 
//     {
//         console.log("started");
//     }
// });

mongoose.connect("mongodb://localhost:27017/library",
{
useNewUrlParser: true, 
useUnifiedTopology: true 
}).then(() => {
console.log("connect to database");
server.listen(8000,() => {
console.log("App is listen on port 8000");
})
})
server.use(express.json());
server.use("/user", routes);