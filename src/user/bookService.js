var bookModel = require('./bookModel');
module.exports.getBookFromDBService = () => { 
    return new Promise(function checkURL(resolve, reject) {
        bookModel.find({}, function returnData(error, result) {
            if(error) { 
                reject(false);
            } else { 
                resolve(result);
            }
        });
    });
}



module.exports.createBookDBService = (bookDetails) => { 
    return new Promise(function myFn(resolve, reject) {
        var bookModelData = new bookModel();

        bookModelData.title = bookDetails.firstname;
        bookModelData.writer = bookDetails.lastname;
        bookModelData.genre = bookDetails.email;


        bookModelData.save(function resultHandle(error, result) { 
            if(error) { 
                reject(false);
            } else {
                resolve(true);
            }
        });
    })
}