var userService = require('./userService');
var userModel = require('./userModel');
var jwt = require('jsonwebtoken');

var createUserControllerFn = async (req, res) => { 
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password

    const record = await userModel.findOne({email:email});

    if(record) { 
        return res.status(400).send({
            message:"Email is already registered"
        })
    } else {

        const user = new userModel({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })


        const result = await user.save();
        // res.json({
        //     user:result
        // })
        // JWT 
        const {_id} =  result.toJSON()
        const token = jwt.sign({_id:_id}, "secret");
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24*60*60*1000
        })

        // res.send({
        //     message:success
        // })

        



    try {
        console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);
    if (status) {
        res.send({ "status": true, "message": "User created successfully" });

    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }

} 
catch(err)
{
    console.log(err);
}
    }
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try { 
        
        result = await userService.loginuserDBService(req.body);
        if(result.status) {
            res.send({ "status": true, "message": result.msg });
        } else { 
            res.send({"status": false, "message": result.msg });
        }
    } 
    catch (error) { 
        console.log(error);
        res.send({"status": false, "message": error.msg });
    }
}


var getBookConntrollerfn = async (req, res) => {
    var book = await userService.getBookFromDBService();
    res.send({ "status": true, "data": book});
}

var createBookControllerFn = async (req, res) => { 

    var status = await userService.createBookDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Book added successfully" });

    } else {
        res.send({ "status": false, "message": "Error adding user" });
    }
} 

var updateBookController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
    
    var result = await userService.updateBookDBService(req.params.id, req.body);
    
    if(result) { 
        res.send({"status": true, "message": "Book Updated"});
    } else {
        res.send({"status": false, "message": "Book Updated Failed"});
    }
}

var deleteBookController = async (req, res) => {
    console.log(req.params.id);
    var result = await userService.removeBookDbService(req.params.id);

    if(result) { 
        res.send({"status": true, "message": "Book Deleted"});
    } else {
        res.send({"status": false, "message": "Book Deleted Failed"});
    }
}

module.exports = {deleteBookController, updateBookController, createBookControllerFn , getBookConntrollerfn, createUserControllerFn, loginUserControllerFn };