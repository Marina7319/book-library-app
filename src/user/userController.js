var userService = require('./userService');

var getDataControllerfn = async (req, res) => 
{
    var employee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": employee});
}

var createUserControllerFn = async (req, res) => { 

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





var updateUserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
    
    var result = await userService.updateUserDBService(req.params.id, req.body);
    
    if(result) { 
        res.send({"status": true, "message": "User Updated"});
    } else {
        res.send({"status": false, "message": "User Updated Failed"});
    }
}

var deleteUserController = async (req, res) => {
    console.log(req.params.id);
    var result = await userService.removeUserDbService(req.params.id);

    if(result) { 
        res.send({"status": true, "message": "User Deleted"});
    } else {
        res.send({"status": false, "message": "User Deleted Failed"});
    }
}

module.exports = { deleteUserController, updateUserController, getDataControllerfn ,createUserControllerFn, loginUserControllerFn };