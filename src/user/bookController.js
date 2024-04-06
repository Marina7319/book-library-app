var bookService = require('./userService');





var getBookControllerfn = async (req, res) => 
{
    var book = await userService.getBookFromDBService();
    res.send({ "status": true, "data": book});
}

var createBookControllerFn = async (req, res) => { 

    var status = await userService.createBookDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });

    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
} 



//module.exports = { getBookControllerfn };