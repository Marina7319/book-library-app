var userModel = require('./userModel');
var key = '1234567890123456';
var encryptor = require('simple-encryptor')(key);

module.exports.getDataFromDBService = (id) => { 
    return new Promise(function checkURL(resolve, reject) {
        userModel.find(id, function returnData(error, result) {
            if(error) { 
                reject(false);
            } else { 
                resolve(result);
            }
        });
    });
}



module.exports.createUserDBService = (userDetails) => { 
    return new Promise(function myFn(resolve, reject) {
        var userModelData = new userModel();

        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;
        var encrypted = encryptor.encrypt(userDetails.password);
        userModelData.password = encrypted;

        userModelData.save(function resultHandle(error, result) { 
            if(error) { 
                reject(false);
            } else {
                resolve(true);
            }
        });
    })
}

module.exports.loginuserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findOne({ email: userDetails.email}, function getresult(errorvalue, result){
            if(errorvalue) {
                reject({status: false, msg: "Invalid Data"});
            } else {
                if(result != undefined && result != null) 
                {
                    var decrypted = encryptor.decrypt(result.password);

                    if(decrypted == userDetails.password)
                    {
                        resolve({status: true, msg: "User Validated Successfully"});
                    } else {
                        reject({status: false, msg: "User Validated failed"});
                    }
                } else {
                    reject({status: false, msg: "Invalid User Details"});
                }
            }
        });
    });
}

module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findOneAndUpdate(id, userDetails, function returnData(error, result) {
            if(error) 
            {
                reject(false);
            }
            else 
            {
                resolve(result);
            }
        });
    });
}


module.exports.removeUserDbService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
            if(error) 
            {
                reject(false);
            }
            else 
            {
                resolve(result);
            }
        });
    });
}